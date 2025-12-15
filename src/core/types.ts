/**
 * Enum (enumeración) que define los tipos de datos que podemos usar en pseudocódigo.
 * Un enum es como una lista de constantes nombradas. En vez de usar strings sueltos,
 * agrupamos todos los tipos posibles aquí.
 * 
 * ¿Por qué usar enum?
 * - Evita errores de tipeo (el IDE nos ayuda con autocompletado)
 * - TypeScript nos avisa si usamos un tipo que no existe
 * - El código es más fácil de leer: DataType.ENTERO es más claro que "Entero"
 */
export enum DataType {
  ENTERO = 'Entero',    // Para números enteros: 1, 2, -5, 100
  REAL = 'Real',        // Para números decimales: 3.14, -2.5, 0.001
  LOGICO = 'Logico',    // Para valores booleanos: Verdadero o Falso
  CADENA = 'Cadena',    // Para textos: "Hola", "Juan", "Mensaje"
  CARACTER = 'Caracter', // Para un solo carácter: 'a', 'Z', '1'
}

/**
 * Interface (interfaz) que describe cómo se ve una variable declarada.
 * Una interface es como un contrato: define qué propiedades debe tener un objeto.
 * 
 * Ejemplo de uso:
 * const miVariable: VariableDeclaration = {
 *   name: "contador",
 *   type: DataType.ENTERO,
 *   isConstant: false
 * };
 */
export interface VariableDeclaration {
  name: string;              // El nombre de la variable: "edad", "suma", etc.
  type: DataType;            // Su tipo de dato (Entero, Real, etc.)
  isConstant: boolean;       // true si es constante (no se puede cambiar)
  value?: LiteralExpression; // El valor inicial (opcional, solo para constantes)
}

/**
 * Type Union (unión de tipos): una expresión puede ser UNO de estos tipos.
 * Es como decir: "una Expression puede ser un Literal, O una Variable, O una operación..."
 * El símbolo | significa "o".
 * 
 * Esto nos permite trabajar con diferentes tipos de expresiones de forma segura.
 */
export type Expression =
  | LiteralExpression    // Un valor fijo: 5, "texto", true
  | VariableExpression   // Una referencia a variable: x, contador
  | BinaryExpression     // Operación con dos valores: a + b, x > 5
  | UnaryExpression;     // Operación con un valor: -x, NO condicion

/**
 * Representa un valor literal (constante) en el código.
 * "Literal" significa que el valor está escrito directamente en el código.
 * 
 * Ejemplos:
 * - El número 42 es un literal entero
 * - El texto "Hola" es un literal de cadena
 * - El valor true es un literal lógico
 */
export interface LiteralExpression {
  kind: 'literal';              // Etiqueta que identifica el tipo (patrón discriminador)
  valueType: DataType;          // Tipo de dato del literal (Entero, Real, etc.)
  value: string | number | boolean; // Valor concreto del literal
}

/**
 * Representa una referencia a una variable ya declarada.
 * Cuando escribimos "x" en una expresión, estamos haciendo referencia
 * al valor que tiene guardado la variable x.
 */
export interface VariableExpression {
  kind: 'variable';  // Etiqueta discriminadora
  name: string;      // El nombre de la variable a la que hacemos referencia
}

/**
 * Enum con todos los operadores binarios (operadores que necesitan dos valores).
 * Por ejemplo: en "5 + 3", el + es un operador binario que opera sobre 5 y 3.
 * 
 * Los agrupamos por categorías:
 * - Aritméticos: para hacer cálculos matemáticos
 * - Relacionales: para hacer comparaciones
 * - Lógicos: para combinar condiciones
 */
export enum BinaryOperator {
  // Operadores Aritméticos (devuelven números)
  ADD = '+',        // Suma: 5 + 3 = 8
  SUBTRACT = '-',   // Resta: 5 - 3 = 2
  MULTIPLY = '*',   // Multiplicación: 5 * 3 = 15
  DIVIDE = '/',     // División: 6 / 2 = 3
  MODULO = '%',     // Módulo (resto): 7 % 3 = 1
  
  // Operadores Relacionales (devuelven verdadero/falso)
  EQUAL = '=',           // Igual a: 5 = 5 es Verdadero
  NOT_EQUAL = '!=',      // Distinto de: 5 != 3 es Verdadero
  LESS_THAN = '<',       // Menor que: 3 < 5 es Verdadero
  LESS_EQUAL = '<=',     // Menor o igual: 5 <= 5 es Verdadero
  GREATER_THAN = '>',    // Mayor que: 5 > 3 es Verdadero
  GREATER_EQUAL = '>=',  // Mayor o igual: 5 >= 5 es Verdadero
  
  // Operadores Lógicos (combinan valores verdadero/falso)
  AND = 'Y',  // Y lógico: ambas condiciones deben ser verdaderas
  OR = 'O',   // O lógico: al menos una condición debe ser verdadera
}

/**
 * Representa una operación binaria (con dos operandos).
 * Por ejemplo: "a + b" donde + es el operador, "a" es left y "b" es right.
 * 
 * Las expresiones pueden anidarse: (a + b) * c
 * En este caso, (a + b) sería una BinaryExpression completa que se usa
 * como left en otra BinaryExpression con operador *.
 */
export interface BinaryExpression {
  kind: 'binary';           // Etiqueta discriminadora
  operator: BinaryOperator; // Qué operación hacemos (+, -, *, etc.)
  left: Expression;         // Expresión del lado izquierdo
  right: Expression;        // Expresión del lado derecho
}

/**
 * Operadores unarios (operadores que actúan sobre UN solo valor).
 * Por ejemplo: -5 (el negativo de 5) o NO(verdadero) = falso
 */
export enum UnaryOperator {
  NOT = 'NO',     // Negación lógica: convierte true en false y viceversa
  NEGATE = '-',   // Negación aritmética: convierte 5 en -5
}

/**
 * Representa una operación unaria.
 * Por ejemplo: NO(x > 5) o -(contador)
 */
export interface UnaryExpression {
  kind: 'unary';            // Etiqueta discriminadora
  operator: UnaryOperator;  // Qué operación hacemos (NO o -)
  operand: Expression;      // La expresión sobre la que operamos
}

/**
 * Type Union de todas las posibles sentencias (instrucciones) en pseudocódigo.
 * Cada tipo de sentencia hace algo diferente:
 * - Define: declara variables
 * - Assign: asigna valores
 * - Read/Write: entrada/salida
 * - If/While/For: estructuras de control
 */
export type Statement =
  | DefineStatement    // Definir x Como Entero
  | AssignStatement    // x <- 5
  | ReadStatement      // Leer x
  | WriteStatement     // Escribir "Hola"
  | IfStatement        // Si condicion Entonces...
  | WhileStatement     // Mientras condicion Hacer...
  | ForStatement;      // Para i<-1 Hasta 10...

/**
 * Sentencia para declarar una variable.
 * En PSeInt: Definir nombre Como Tipo
 * 
 * Ejemplo: Definir edad Como Entero
 * Se traduce a: { kind: 'define', name: 'edad', dataType: DataType.ENTERO }
 */
export interface DefineStatement {
  kind: 'define';    // Identificador del tipo de sentencia
  name: string;      // Nombre de la variable
  dataType: DataType; // Tipo de dato de la variable
}

/**
 * Sentencia de asignación (dar un valor a una variable).
 * En PSeInt: variable <- expresión
 * 
 * Ejemplo: edad <- 25
 * La flecha <- indica que el valor de la derecha se guarda en la variable de la izquierda.
 */
export interface AssignStatement {
  kind: 'assign';        // Identificador del tipo
  variable: string;      // Nombre de la variable que recibe el valor
  expression: Expression; // Expresión cuyo resultado se asigna
}

/**
 * Sentencia para leer datos del usuario.
 * En PSeInt: Leer variable
 * 
 * Pide al usuario que ingrese un valor y lo guarda en la variable.
 */
export interface ReadStatement {
  kind: 'read';      // Identificador del tipo
  variable: string;  // Variable donde se guardará lo que escriba el usuario
}

/**
 * Sentencia para mostrar información en pantalla.
 * En PSeInt: Escribir expresión
 * 
 * Puede mostrar texto, números, o el valor de variables.
 * Ejemplo: Escribir "El resultado es: ", suma
 */
export interface WriteStatement {
  kind: 'write';         // Identificador del tipo
  expression: Expression; // Lo que queremos mostrar
}

/**
 * Estructura condicional Si-Entonces-Sino.
 * Permite ejecutar código diferente dependiendo de una condición.
 * 
 * En PSeInt:
 * Si condicion Entonces
 *   ... código si es verdadero ...
 * Sino
 *   ... código si es falso ...
 * FinSi
 */
export interface IfStatement {
  kind: 'if';
  condition: Expression;   // Expresión que debe ser verdadero o falso
  thenBlock: Statement[];  // Sentencias a ejecutar si la condición es verdadera
  elseBlock?: Statement[]; // Sentencias a ejecutar si es falsa (opcional)
}

/**
 * Bucle Mientras (while loop).
 * Repite un bloque de código mientras una condición sea verdadera.
 * 
 * En PSeInt:
 * Mientras condicion Hacer
 *   ... código a repetir ...
 * FinMientras
 * 
 * IMPORTANTE: La condición se evalúa ANTES de cada iteración.
 */
export interface WhileStatement {
  kind: 'while';
  condition: Expression; // Condición que controla el bucle
  body: Statement[];     // Código que se repite
}

/**
 * Bucle Para (for loop) con contador.
 * Repite un bloque de código un número determinado de veces.
 * 
 * En PSeInt:
 * Para contador <- inicio Hasta fin Con Paso incremento Hacer
 *   ... código a repetir ...
 * FinPara
 * 
 * Ejemplo: Para i <- 1 Hasta 10 Con Paso 1 Hacer
 * Esto ejecuta el código 10 veces, con i tomando valores del 1 al 10.
 */
export interface ForStatement {
  kind: 'for';
  counter: string;    // Nombre de la variable contador (ej: i, j, contador)
  start: Expression;  // Valor inicial del contador
  end: Expression;    // Valor final (inclusive)
  step?: Expression;  // Incremento en cada iteración (opcional, por defecto 1)
  body: Statement[];  // Código que se repite
}

/**
 * Nodo raíz del árbol (AST - Abstract Syntax Tree).
 * Representa un programa completo de pseudocódigo.
 * 
 * Un AST es una representación estructurada del código, como un árbol:
 * - El Program es la raíz
 * - Las Statement son ramas
 * - Las Expression son hojas
 * 
 * Esta estructura nos permite analizar y generar código fácilmente.
 */
export interface Program {
  kind: 'program';      // Identificador del tipo
  name: string;         // Nombre del algoritmo
  statements: Statement[]; // Lista de todas las sentencias del programa
  /**
   * Metadatos opcionales provenientes del editor visual.
   * Si el usuario añade bloques de inicio/fin de algoritmo,
   * estos flags se marcan para que el validador pueda avisar
   * si falta alguno de ellos.
   */
  hasStartBlock?: boolean;
  hasEndBlock?: boolean;
}

/**
 * Resultado que devuelve el validador al verificar un programa.
 * Incluye si es válido y una lista de errores encontrados.
 */
export interface ValidationResult {
  valid: boolean;               // true si no hay errores, false si hay algún problema
  errors: ValidationError[];    // Array con todos los errores encontrados
}

/**
 * Representa un error de validación con su mensaje descriptivo.
 * Ayuda al usuario a entender qué está mal en su algoritmo.
 */
export interface ValidationError {
  message: string;    // Descripción del error (ej: "Variable 'x' no declarada")
  location?: string;  // Ubicación del error (opcional, para futuras mejoras)
}
