import * as Blockly from 'blockly';
import {
  Program,
  Statement,
  Expression,
  DataType,
  BinaryOperator,
  UnaryOperator,
} from '../../core';

/**
  * Convierte el workspace de Blockly a la representación interna (AST) del programa.
  * Permite analizar y validar los algoritmos construidos visualmente.
 */
export class BlocklyToASTConverter {
  /**
  * Convierte el workspace completo de Blockly a un objeto Program (AST raíz).
  * Extrae bloques de inicio/fin y todas las sentencias ejecutables.
   */
  convertWorkspace(workspace: Blockly.Workspace, programName: string = 'MiAlgoritmo'): Program {
    const topBlocks = workspace.getTopBlocks(true);
    const statements: Statement[] = [];
    let hasStart = false;
    let hasEnd = false;
    let nameFromStart: string | undefined;

    for (const block of topBlocks) {
      // Capturar bloques de inicio/fin
      if (block.type === 'pseudo_start') {
        hasStart = true;
        nameFromStart = block.getFieldValue('ALGO_NAME') as string;
        continue; // no es una sentencia ejecutable
      }
      if (block.type === 'pseudo_end') {
        hasEnd = true;
        continue; // no es una sentencia ejecutable
      }

      const statement = this.convertBlock(block);
      if (statement) {
        statements.push(statement);
      }
    }

    return {
      kind: 'program',
      name: nameFromStart ?? programName,
      statements,
      hasStartBlock: hasStart,
      hasEndBlock: hasEnd,
    };
  }

  /**
  * Convierte un bloque individual de Blockly a una sentencia (Statement).
  * Usa el tipo de bloque para delegar en el método de conversión adecuado.
   */
  private convertBlock(block: Blockly.Block): Statement | null {
    switch (block.type) {
      case 'pseudo_define':
        return this.convertDefine(block);
      case 'pseudo_assign':
        return this.convertAssign(block);
      case 'pseudo_read':
        return this.convertRead(block);
      case 'pseudo_write':
        return this.convertWrite(block);
      case 'pseudo_if':
        return this.convertIf(block);
      case 'pseudo_while':
        return this.convertWhile(block);
      case 'pseudo_for':
        return this.convertFor(block);
      default:
        console.warn(`Tipo de bloque desconocido: ${block.type}`);
        return null;
    }
  }

  private convertDefine(block: Blockly.Block): Statement {
      /**
      * Convierte un bloque de definición de variable a Statement.
      */
    const name = block.getFieldValue('VAR_NAME') as string;
    const dataType = block.getFieldValue('VAR_TYPE') as DataType;

    return {
      kind: 'define',
      name,
      dataType,
    };
  }

  private convertAssign(block: Blockly.Block): Statement {
      /**
      * Convierte un bloque de asignación a Statement.
      */
    const variable = block.getFieldValue('VAR_NAME') as string;
    const valueBlock = block.getInputTargetBlock('VALUE');

    const expression: Expression = valueBlock
      ? this.convertExpression(valueBlock)
      : { kind: 'literal', valueType: DataType.ENTERO, value: 0 };

    return {
      kind: 'assign',
      variable,
      expression,
    };
  }

  private convertRead(block: Blockly.Block): Statement {
      /**
      * Convierte un bloque de lectura (Leer) a Statement.
      */
    const variable = block.getFieldValue('VAR_NAME') as string;

    return {
      kind: 'read',
      variable,
    };
  }

  private convertWrite(block: Blockly.Block): Statement {
      /**
      * Convierte un bloque de escritura (Escribir) a Statement.
      */
    const valueBlock = block.getInputTargetBlock('VALUE');

    const expression: Expression = valueBlock
      ? this.convertExpression(valueBlock)
      : { kind: 'literal', valueType: DataType.CADENA, value: '' };

    return {
      kind: 'write',
      expression,
    };
  }

  private convertIf(block: Blockly.Block): Statement {
      /**
      * Convierte un bloque condicional (Si) a Statement.
      */
    const conditionBlock = block.getInputTargetBlock('CONDITION');
    const condition: Expression = conditionBlock
      ? this.convertExpression(conditionBlock)
      : { kind: 'literal', valueType: DataType.LOGICO, value: true };

    const thenBlock = this.convertStatementList(block.getInputTargetBlock('THEN'));
    const elseBlock = this.convertStatementList(block.getInputTargetBlock('ELSE'));

    return {
      kind: 'if',
      condition,
      thenBlock,
      elseBlock: elseBlock.length > 0 ? elseBlock : undefined,
    };
  }

  private convertWhile(block: Blockly.Block): Statement {
      /**
      * Convierte un bloque de bucle Mientras a Statement.
      */
    const conditionBlock = block.getInputTargetBlock('CONDITION');
    const condition: Expression = conditionBlock
      ? this.convertExpression(conditionBlock)
      : { kind: 'literal', valueType: DataType.LOGICO, value: true };

    const body = this.convertStatementList(block.getInputTargetBlock('DO'));

    return {
      kind: 'while',
      condition,
      body,
    };
  }

  private convertFor(block: Blockly.Block): Statement {
      /**
      * Convierte un bloque de bucle Para a Statement.
      */
    const counter = block.getFieldValue('COUNTER') as string;

    const startBlock = block.getInputTargetBlock('START');
    const start: Expression = startBlock
      ? this.convertExpression(startBlock)
      : { kind: 'literal', valueType: DataType.ENTERO, value: 1 };

    const endBlock = block.getInputTargetBlock('END');
    const end: Expression = endBlock
      ? this.convertExpression(endBlock)
      : { kind: 'literal', valueType: DataType.ENTERO, value: 10 };

    const stepBlock = block.getInputTargetBlock('STEP');
    const step: Expression | undefined = stepBlock
      ? this.convertExpression(stepBlock)
      : undefined;

    const body = this.convertStatementList(block.getInputTargetBlock('DO'));

    return {
      kind: 'for',
      counter,
      start,
      end,
      step,
      body,
    };
  }

  /**
  * Convierte una lista de bloques encadenados a un array de sentencias (Statement[]).
  * Recorre la cadena de bloques conectados y los convierte recursivamente.
   */
  private convertStatementList(firstBlock: Blockly.Block | null): Statement[] {
    const statements: Statement[] = [];
    let currentBlock = firstBlock;

    while (currentBlock) {
      const statement = this.convertBlock(currentBlock);
      if (statement) {
        statements.push(statement);
      }
      currentBlock = currentBlock.getNextBlock();
    }

    return statements;
  }

  /**
  * Convierte un bloque de expresión a Expression.
  * Soporta literales, variables, operaciones binarias y unarias.
   */
  private convertExpression(block: Blockly.Block): Expression {
    switch (block.type) {
      case 'pseudo_number':
        return {
          kind: 'literal',
          valueType: DataType.ENTERO,
          value: block.getFieldValue('VALUE') as number,
        };

      case 'pseudo_text':
        return {
          kind: 'literal',
          valueType: DataType.CADENA,
          value: block.getFieldValue('VALUE') as string,
        };

      case 'pseudo_boolean':
        const boolValue = block.getFieldValue('VALUE') === 'TRUE';
        return {
          kind: 'literal',
          valueType: DataType.LOGICO,
          value: boolValue,
        };

      case 'pseudo_variable':
        return {
          kind: 'variable',
          name: block.getFieldValue('VAR_NAME') as string,
        };

      case 'pseudo_arithmetic':
        return this.convertBinaryExpression(block, 'arithmetic');

      case 'pseudo_comparison':
        return this.convertBinaryExpression(block, 'comparison');

      case 'pseudo_logic':
        return this.convertBinaryExpression(block, 'logic');

      case 'pseudo_not':
        return this.convertUnaryExpression(block);

      default:
        console.warn(`Tipo de expresión desconocido: ${block.type}`);
        return {
          kind: 'literal',
          valueType: DataType.ENTERO,
          value: 0,
        };
    }
  }

  private convertBinaryExpression(
    block: Blockly.Block,
    _type: 'arithmetic' | 'comparison' | 'logic'
  ): Expression {
  /**
  * Convierte un bloque de operación binaria (aritmética, comparación, lógica) a Expression.
  */
    const leftBlock = block.getInputTargetBlock('A');
    const rightBlock = block.getInputTargetBlock('B');
    const operator = block.getFieldValue('OP') as string;

    const left: Expression = leftBlock
      ? this.convertExpression(leftBlock)
      : { kind: 'literal', valueType: DataType.ENTERO, value: 0 };

    const right: Expression = rightBlock
      ? this.convertExpression(rightBlock)
      : { kind: 'literal', valueType: DataType.ENTERO, value: 0 };

    return {
      kind: 'binary',
      operator: operator as BinaryOperator,
      left,
      right,
    };
  }

  private convertUnaryExpression(block: Blockly.Block): Expression {
      /**
      * Convierte un bloque de operación unaria (NO lógico) a Expression.
      */
    const valueBlock = block.getInputTargetBlock('VALUE');

    const operand: Expression = valueBlock
      ? this.convertExpression(valueBlock)
      : { kind: 'literal', valueType: DataType.LOGICO, value: false };

    return {
      kind: 'unary',
      operator: UnaryOperator.NOT,
      operand,
    };
  }
}
