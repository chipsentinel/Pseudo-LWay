import {
  Program,
  Statement,
  Expression,
  ValidationResult,
  ValidationError,
  DataType,
  VariableDeclaration,
} from './types';

/**
 * Clase Validador: verifica que un programa de pseudocódigo sea correcto.
 * 
 * ¿Qué valida?
 * 1. Que no uses variables sin declararlas primero
 * 2. Que las expresiones sean correctas
 * 3. Que la estructura del programa tenga sentido
 * 
 * Es como un "corrector ortográfico" pero para código.
 * 
 * Concepto importante: SCOPE (ámbito)
 * El validador mantiene un registro (Map) de todas las variables declaradas.
 * Antes de usar una variable, verifica que esté en ese registro.
 */
export class Validator {
  // Array privado donde guardamos los errores que vamos encontrando
  private errors: ValidationError[] = [];
  
  // Map (diccionario) que guarda todas las variables declaradas
  // Clave: nombre de la variable, Valor: información de la variable
  // ¿Por qué Map y no Array? Porque buscar en Map es mucho más rápido (O(1) vs O(n))
  private variables: Map<string, VariableDeclaration> = new Map();

  /**
   * Método principal: valida todo un programa.
   * 
   * Flujo de validación:
   * 1. Resetea el estado (limpia errores y variables previas)
   * 2. Recorre todas las sentencias validándolas una por una
   * 3. Devuelve el resultado con la lista de errores
   * 
   * @param program - El programa completo a validar
   * @returns ValidationResult con valid=true si no hay errores
   */
  validate(program: Program): ValidationResult {
    // Limpiamos el estado anterior (por si se valida más de un programa)
    this.errors = [];
    this.variables = new Map();

    // Requerir siempre inicio y fin de algoritmo cuando se trabaja con bloques
    if (!program.hasStartBlock) {
      this.addError('Falta el bloque de Algoritmo <nombre>. Añade el inicio de algoritmo.');
    }
    if (!program.hasEndBlock) {
      this.addError('Falta el bloque de FinAlgoritmo. Añade "FinAlgoritmo" al final.');
    }

    // Validamos cada sentencia del programa
    this.validateStatements(program.statements);

    // Devolvemos el resultado: es válido si no hay errores
    return {
      valid: this.errors.length === 0,
      errors: this.errors,
    };
  }

  /**
   * Valida una lista de sentencias.
   * Este método es útil porque lo usamos tanto para el programa principal
   * como para bloques internos (ej: el cuerpo de un Si o un Mientras).
   */
  private validateStatements(statements: Statement[]): void {
    // for...of es perfecto para recorrer arrays cuando solo necesitamos el elemento
    for (const statement of statements) {
      this.validateStatement(statement);
    }
  }

  /**
   * Valida una sentencia individual.
   * Usa un switch para determinar el tipo de sentencia y delega en el método correspondiente.
   *
   * Patrón: Discriminated Union.
   * El campo 'kind' permite a TypeScript inferir el tipo exacto y sus propiedades.
   */
  private validateStatement(statement: Statement): void {
    switch (statement.kind) {
      case 'define':
        this.validateDefine(statement);
        break;
      case 'assign':
        this.validateAssign(statement);
        break;
      case 'read':
        this.validateRead(statement);
        break;
      case 'write':
        this.validateWrite(statement);
        break;
      case 'if':
        this.validateIf(statement);
        break;
      case 'while':
        this.validateWhile(statement);
        break;
      case 'for':
        this.validateFor(statement);
        break;
    }
  }

  /**
   * Valida la declaración de una variable (Definir).
   *
   * Regla: No se puede declarar dos veces la misma variable.
   * Si ya existe, se reporta error. Si no existe, se registra en el Map.
   */
  private validateDefine(statement: { kind: 'define'; name: string; dataType: DataType }): void {
    // Map.has() verifica si una clave ya existe en el diccionario
    if (this.variables.has(statement.name)) {
      // ¡Error! Ya existe una variable con ese nombre
      this.addError(`La variable "${statement.name}" ya está declarada`);
    } else {
      // Todo bien, registramos la nueva variable en nuestro Map
      this.variables.set(statement.name, {
        name: statement.name,
        type: statement.dataType,
        isConstant: false,
      });
    }
  }

  /**
   * Valida una asignación (variable <- expresión).
   *
   * Comprueba:
   * 1. Que la variable exista (debe estar declarada previamente)
   * 2. Que la expresión a asignar sea válida
   */
  private validateAssign(statement: { kind: 'assign'; variable: string; expression: Expression }): void {
    // Verificamos que la variable exista
    if (!this.variables.has(statement.variable)) {
      this.addError(`La variable "${statement.variable}" no está declarada`);
    }

    // Validamos la expresión (puede ser una operación compleja)
    this.validateExpression(statement.expression);
  }

  /**
   * Valida una sentencia Leer.
   * Verifica que la variable de destino esté declarada.
   */
  private validateRead(statement: { kind: 'read'; variable: string }): void {
    if (!this.variables.has(statement.variable)) {
      this.addError(`La variable "${statement.variable}" no está declarada`);
    }
  }

  /**
   * Valida una sentencia Escribir.
   * Valida que la expresión a mostrar sea correcta.
   */
  private validateWrite(statement: { kind: 'write'; expression: Expression }): void {
    this.validateExpression(statement.expression);
  }

  /**
   * Valida una estructura Si (condicional).
   *
   * Valida:
   * 1. La condición (debe ser expresión booleana válida)
   * 2. El bloque "entonces" (sentencias si la condición es verdadera)
   * 3. El bloque "sino" (opcional, sentencias si la condición es falsa)
   */
  private validateIf(statement: {
    kind: 'if';
    condition: Expression;
    thenBlock: Statement[];
    elseBlock?: Statement[];
  }): void {
    // Validar la condición
    this.validateExpression(statement.condition);

    // Validar el bloque "entonces"
    this.validateStatements(statement.thenBlock);
    
    // Validar el bloque "sino" solo si existe (es opcional)
    if (statement.elseBlock) {
      this.validateStatements(statement.elseBlock);
    }
  }

  /**
   * Valida un bucle Mientras.
   * Valida la condición y el cuerpo del bucle.
   */
  private validateWhile(statement: {
    kind: 'while';
    condition: Expression;
    body: Statement[];
  }): void {
    // Validar condición
    this.validateExpression(statement.condition);

    // Validar cuerpo del bucle
    this.validateStatements(statement.body);
  }

  /**
   * Valida un bucle Para.
   *
   * Característica: el contador se declara automáticamente como entero.
   * No es necesario definirlo antes del bucle.
   */
  private validateFor(statement: {
    kind: 'for';
    counter: string;
    start: Expression;
    end: Expression;
    step?: Expression;
    body: Statement[];
  }): void {
    // Si el contador no existe, lo creamos automáticamente
    if (!this.variables.has(statement.counter)) {
      this.variables.set(statement.counter, {
        name: statement.counter,
        type: DataType.ENTERO,  // Los contadores siempre son enteros
        isConstant: false,
      });
    }

    // Validar las expresiones del bucle
    this.validateExpression(statement.start);  // Valor inicial
    this.validateExpression(statement.end);    // Valor final
    
    // El paso es opcional
    if (statement.step) {
      this.validateExpression(statement.step);
    }

    // Validar el cuerpo del bucle
    this.validateStatements(statement.body);
  }

  /**
   * Valida una expresión de forma recursiva.
   *
   * Las expresiones pueden ser simples (literal, variable) o complejas (operaciones anidadas).
   * Este método se llama recursivamente para validar subexpresiones.
   */
  private validateExpression(expression: Expression): void {
    switch (expression.kind) {
      case 'literal':
        // Los literales (5, "texto", true) siempre son válidos por sí mismos
        break;
        
      case 'variable':
        // Verificar que la variable exista en nuestro registro
        if (!this.variables.has(expression.name)) {
          this.addError(`La variable "${expression.name}" no está declarada`);
        }
        break;
        
      case 'binary':
        // Validar ambos lados de la operación (recursivamente)
        this.validateExpression(expression.left);
        this.validateExpression(expression.right);
        break;
        
      case 'unary':
        // Validar el operando (recursivamente)
        this.validateExpression(expression.operand);
        break;
    }
  }

  /**
   * Añade un error a la lista de errores encontrados.
   * Centraliza la gestión de errores de validación.
   *
   * @param message - Mensaje descriptivo del error
   * @param location - Ubicación opcional del error (para futuras mejoras)
   */
  private addError(message: string, location?: string): void {
    this.errors.push({ message, location });
  }
}
