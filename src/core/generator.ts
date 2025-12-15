import {
  Program,
  Statement,
  Expression,
} from './types';

/**
 * Clase Generador de Pseudocódigo.
 * Convierte nuestro AST (representación interna) a texto legible estilo PSeInt.
 * 
 * Es como un "traductor": toma nuestra estructura de datos y la convierte
 * en el formato que los humanos leemos.
 * 
 * Conceptos importantes:
 * - Indentación: espacios al inicio de cada línea para mostrar jerarquía
 * - Recursión: genera código para estructuras anidadas
 */
export class PseudocodeGenerator {
  // Nivel actual de indentación (cuántos espacios añadir)
  private indentLevel = 0;
  
  // Constante: cuántos espacios por nivel de indentación
  private readonly INDENT = '    '; // 4 espacios (estándar común)

  /**
   * Método principal: genera todo el pseudocódigo de un programa.
   * 
   * Estructura de salida:
   * Algoritmo NombreDelPrograma
   *     sentencia1
   *     sentencia2
   *     ...
   * FinAlgoritmo
   * 
   * @param program - El programa completo a generar
   * @returns String con el pseudocódigo formateado
   */
  generate(program: Program): string {
    const lines: string[] = []; // Array para ir acumulando líneas

    // Línea de inicio
    lines.push(`Algoritmo ${program.name}`);

    // Generamos todas las sentencias con indentación
    this.indentLevel = 1; // Las sentencias van indentadas un nivel
    for (const statement of program.statements) {
      // generateStatement devuelve un array de líneas (puede ser más de una)
      lines.push(...this.generateStatement(statement));
    }

    // Línea de cierre
    lines.push('FinAlgoritmo');

    // Unimos todas las líneas con saltos de línea
    return lines.join('\n');
  }

  private generateStatement(statement: Statement): string[] {
    switch (statement.kind) {
      case 'define':
        return [this.indent(`Definir ${statement.name} Como ${this.mapTypeToJava(statement.dataType)}`)];

      case 'assign':
        return [
          this.indent(`${statement.variable} <- ${this.generateExpression(statement.expression)}`),
        ];

      case 'read':
        return [this.indent(`Leer ${statement.variable}`)];

      case 'write':
        return [this.indent(`Escribir ${this.generateExpression(statement.expression)}`)];

      case 'if':
        return this.generateIf(statement);

      case 'while':
        return this.generateWhile(statement);

      case 'for':
        return this.generateFor(statement);
    }
  }

  /**
   * Genera el pseudocódigo para una estructura condicional Si-Entonces-Sino.
   * Incluye bloques "entonces" y opcionalmente "sino".
   */
  private generateIf(statement: {
    kind: 'if';
    condition: Expression;
    thenBlock: Statement[];
    elseBlock?: Statement[];
  }): string[] {
    const lines: string[] = [];

    // Si condición Entonces
    lines.push(this.indent(`Si ${this.generateExpression(statement.condition)} Entonces`));

    // Bloque entonces
    this.indentLevel++;
    for (const stmt of statement.thenBlock) {
      lines.push(...this.generateStatement(stmt));
    }
    this.indentLevel--;

    // Bloque sino (si existe)
    if (statement.elseBlock && statement.elseBlock.length > 0) {
      lines.push(this.indent('Sino'));
      this.indentLevel++;
      for (const stmt of statement.elseBlock) {
        lines.push(...this.generateStatement(stmt));
      }
      this.indentLevel--;
    }

    // FinSi
    lines.push(this.indent('FinSi'));

    return lines;
  }

  /**
   * Genera el pseudocódigo para un bucle Mientras.
   * Incluye la condición y el cuerpo del bucle.
   */
  private generateWhile(statement: {
    kind: 'while';
    condition: Expression;
    body: Statement[];
  }): string[] {
    const lines: string[] = [];

    // Mientras condición Hacer
    lines.push(this.indent(`Mientras ${this.generateExpression(statement.condition)} Hacer`));

    // Cuerpo
    this.indentLevel++;
    for (const stmt of statement.body) {
      lines.push(...this.generateStatement(stmt));
    }
    this.indentLevel--;

    // FinMientras
    lines.push(this.indent('FinMientras'));

    return lines;
  }

  /**
   * Genera el pseudocódigo para un bucle Para.
   * Incluye contador, inicio, fin, paso y cuerpo del bucle.
   */
  private generateFor(statement: {
    kind: 'for';
    counter: string;
    start: Expression;
    end: Expression;
    step?: Expression;
    body: Statement[];
  }): string[] {
    const lines: string[] = [];

    // Para contador <- inicio Hasta fin Con Paso paso Hacer
    const start = this.generateExpression(statement.start);
    const end = this.generateExpression(statement.end);
    const step = statement.step ? ` Con Paso ${this.generateExpression(statement.step)}` : '';

    lines.push(this.indent(`Para ${statement.counter} <- ${start} Hasta ${end}${step} Hacer`));

    // Cuerpo
    this.indentLevel++;
    for (const stmt of statement.body) {
      lines.push(...this.generateStatement(stmt));
    }
    this.indentLevel--;

    // FinPara
    lines.push(this.indent('FinPara'));

    return lines;
  }

  /**
   * Genera el texto correspondiente a una expresión.
   * Soporta literales, variables, operaciones binarias y unarias.
   */
  private generateExpression(expression: Expression): string {
    switch (expression.kind) {
      case 'literal':
        return this.generateLiteral(expression.value);

      case 'variable':
        return expression.name;

      case 'binary':
        const left = this.generateExpression(expression.left);
        const right = this.generateExpression(expression.right);
        return `${left} ${expression.operator} ${right}`;

      case 'unary':
        const operand = this.generateExpression(expression.operand);
        return `${expression.operator}${operand}`;
    }
  }

  /**
   * Convierte un valor literal a su representación en pseudocódigo.
   * Maneja strings, booleanos y números.
   */
  private generateLiteral(value: string | number | boolean): string {
    if (typeof value === 'string') {
      return `"${value}"`;
    }
    if (typeof value === 'boolean') {
      return value ? 'Verdadero' : 'Falso';
    }
    return String(value);
  }

  /**
   * Mapea los tipos de datos internos a su equivalente en Java (para mostrar en pseudocódigo).
   */
  private mapTypeToJava(type: import('./types').DataType): string {
    switch (type) {
      case 'Entero':
        return 'int';
      case 'Real':
        return 'double';
      case 'Logico':
        return 'boolean';
      case 'Cadena':
        return 'String';
      case 'Caracter':
        return 'char';
      default:
        return String(type);
    }
  }

  /**
   * Añade la indentación adecuada a una línea de pseudocódigo según el nivel actual.
   */
  private indent(text: string): string {
    return this.INDENT.repeat(this.indentLevel) + text;
  }
}
