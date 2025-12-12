# Wiki Técnico - Pseudo-LWay

## Contenidos

1. [Introducción](#introducción)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Módulo Core](#módulo-core)
4. [Editor Blockly](#editor-blockly)
5. [Componentes React](#componentes-react)
6. [Guía de Extensión](#guía-de-extensión)
7. [Conceptos de Programación](#conceptos-de-programación)

---

## Introducción

Pseudo-LWay es un editor visual de pseudocódigo diseñado para facilitar el aprendizaje de algoritmos. Utiliza una arquitectura modular que separa la lógica de negocio de la interfaz visual.

### Tecnologías Principales

- **React 19**: Framework para construir la interfaz de usuario
- **TypeScript 5.9**: Añade tipado estático a JavaScript
- **Blockly**: Biblioteca para crear editores visuales de bloques
- **Vite**: Herramienta de desarrollo y empaquetado

---

## Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── core/                 # Lógica independiente de la UI
│   ├── types.ts         # Definiciones del AST
│   ├── validator.ts     # Validación de algoritmos
│   ├── generator.ts     # Generación de pseudocódigo
│   └── index.ts
├── features/
│   └── editor/          # Integración con Blockly
│       ├── BlocklyEditor.tsx
│       ├── blockDefinitions.ts
│       ├── blocklyConverter.ts
│       └── index.ts
├── components/          # Componentes React
│   ├── App.tsx
│   └── App.css
├── config.ts
├── main.tsx
└── index.css
```

### Flujo de Datos

```
Usuario → Blockly → AST → Validador → Generador → Pseudocódigo
```

1. **Usuario**: Arrastra y conecta bloques visuales
2. **Blockly**: Mantiene la representación visual
3. **Conversor**: Transforma bloques a AST interno
4. **Validador**: Verifica reglas semánticas
5. **Generador**: Produce texto legible

---

## Módulo Core

El módulo `core` es independiente de la interfaz y contiene toda la lógica de procesamiento de pseudocódigo.

### AST (Abstract Syntax Tree)

Un AST es una representación estructurada del código. En lugar de texto plano, organizamos el programa como un árbol de objetos.

**Ejemplo:**

Código: `x <- 5 + 3`

AST:
```typescript
{
  kind: 'assign',
  variable: 'x',
  expression: {
    kind: 'binary',
    operator: '+',
    left: { kind: 'literal', valueType: 'Entero', value: 5 },
    right: { kind: 'literal', valueType: 'Entero', value: 3 }
  }
}
```

### types.ts - Sistema de Tipos

Define todas las estructuras de datos del AST.

**Jerarquía de tipos:**

- **Program**: Raíz del árbol
  - **Statement[]**: Lista de sentencias
    - DefineStatement, AssignStatement, ReadStatement, etc.
  - Cada Statement puede contener **Expression[]**
    - LiteralExpression, VariableExpression, BinaryExpression, etc.

**Concepto clave: Discriminated Union**

TypeScript usa el campo `kind` para distinguir entre tipos:

```typescript
function procesarExpresion(expr: Expression) {
  if (expr.kind === 'literal') {
    // TypeScript sabe que expr es LiteralExpression
    console.log(expr.value);
  }
}
```

### validator.ts - Validación Semántica

El validador verifica reglas que no son puramente sintácticas:

**Reglas que valida:**

1. **Variables declaradas antes de uso**
   ```
   ❌ x <- 5  // Error: x no declarada
   ✓ Definir x Como Entero
   ✓ x <- 5
   ```

2. **No declarar variables duplicadas**
   ```
   ❌ Definir x Como Entero
   ❌ Definir x Como Real  // Error: ya existe
   ```

3. **Expresiones válidas**
   ```
   ✓ x + y  // Ambas variables existen
   ❌ x + z  // Error si z no está declarada
   ```

**Estructura interna:**

```typescript
class Validator {
  private variables: Map<string, VariableDeclaration>;
  // Map es como un diccionario: clave → valor
  // Búsqueda en O(1), muy eficiente
}
```

### generator.ts - Generación de Código

Convierte el AST a texto formateado.

**Técnicas utilizadas:**

1. **Acumulación de líneas**: Construye un array de strings
2. **Indentación progresiva**: Usa `indentLevel` para espacios
3. **Recursión**: Para estructuras anidadas

**Ejemplo de generación:**

```typescript
// AST de un Si
{
  kind: 'if',
  condition: { kind: 'variable', name: 'x' },
  thenBlock: [...]
}

// Genera:
Si x Entonces
    ...
FinSi
```

---

## Editor Blockly

### blockDefinitions.ts

Define cómo se ven y comportan los bloques.

**Anatomía de un bloque:**

```typescript
Blockly.Blocks['pseudo_define'] = {
  init: function() {
    this.appendDummyInput()  // Añade elementos visuales
      .appendField('Definir')
      .appendField(new Blockly.FieldTextInput('variable'), 'VAR_NAME')
      .appendField('Como')
      .appendField(new Blockly.FieldDropdown([...]), 'VAR_TYPE');
    
    this.setPreviousStatement(true, null);  // Puede conectarse arriba
    this.setNextStatement(true, null);       // Puede conectarse abajo
    this.setColour(160);                     // Color del bloque
  }
};
```

**Tipos de conexiones:**

- `setPreviousStatement`: El bloque se conecta debajo de otro
- `setNextStatement`: Otro bloque se conecta debajo de este
- `setOutput`: El bloque devuelve un valor (expresión)
- `appendValueInput`: El bloque acepta una expresión

### BlocklyEditor.tsx

Componente React que encapsula Blockly.

**Ciclo de vida:**

1. `useEffect` con array vacío `[]`: Se ejecuta solo al montar
2. Crea el workspace de Blockly
3. Carga el ejemplo inicial (si existe)
4. Añade listener para cambios
5. Cleanup: limpia recursos al desmontar

**useRef vs useState:**

- `useRef`: Para guardar referencias que no causan re-render
- `useState`: Para datos que afectan la UI

### blocklyConverter.ts

Parsea la representación interna de Blockly y la convierte a nuestro AST.

**Proceso:**

1. Obtiene bloques del workspace
2. Para cada bloque, determina su tipo
3. Lee sus campos (`getFieldValue`)
4. Lee sus conexiones (`getInputTargetBlock`)
5. Construye recursivamente el AST

---

## Componentes React

### App.tsx

Componente principal que orquesta todo.

**Estados (useState):**

```typescript
const [pseudocode, setPseudocode] = useState<string>('');
const [errors, setErrors] = useState<string[]>([]);
const [workspace, setWorkspace] = useState<Blockly.Workspace | null>(null);
```

**¿Por qué useState?**

Cuando el estado cambia, React re-renderiza el componente automáticamente. Esto actualiza la UI sin manipular el DOM manualmente.

**useCallback:**

```typescript
const handleWorkspaceChange = useCallback((ws) => {
  setWorkspace(ws);
}, []);
```

Evita recrear la función en cada render. Optimización de rendimiento.

**Flujo de generación:**

1. Usuario presiona botón
2. `handleGenerate` se ejecuta
3. Convierte Blockly → AST
4. Valida el AST
5. Si hay errores → muestra errores
6. Si es válido → genera pseudocódigo

---

## Guía de Extensión

### Añadir un Nuevo Bloque

**Paso 1: Definir el tipo** (types.ts)

```typescript
export interface NewStatement {
  kind: 'new_statement';
  // propiedades específicas
}

export type Statement = 
  | DefineStatement
  | NewStatement  // ← añadir aquí
  // ... resto
```

**Paso 2: Crear el bloque visual** (blockDefinitions.ts)

```typescript
Blockly.Blocks['pseudo_new'] = {
  init: function() {
    // configuración visual
  }
};
```

**Paso 3: Añadir conversión** (blocklyConverter.ts)

```typescript
case 'pseudo_new':
  return this.convertNew(block);
```

**Paso 4: Añadir validación** (validator.ts)

```typescript
case 'new_statement':
  this.validateNew(statement);
  break;
```

**Paso 5: Añadir generación** (generator.ts)

```typescript
case 'new_statement':
  return this.generateNew(statement);
```

### Añadir un Nuevo Formato de Exportación

Por ejemplo, generar código Java:

```typescript
// src/core/javaGenerator.ts
export class JavaGenerator {
  generate(program: Program): string {
    // Reutiliza el mismo AST
    // Genera sintaxis Java en lugar de PSeInt
  }
}
```

No necesitas tocar Blockly ni el validador, solo añadir un nuevo generador.

---

## Conceptos de Programación

### Para Estudiantes de DAW 1

#### 1. Tipos de Datos

**Primitivos:**
- `number`: Números (enteros y decimales)
- `string`: Textos
- `boolean`: Verdadero o Falso

**Estructurados:**
- `Array`: Lista de elementos
- `Object`: Colección de pares clave-valor
- `Map`: Diccionario optimizado

#### 2. Estructuras de Datos

**Array vs Map:**

```typescript
// Array: búsqueda lineal O(n)
const arr = ['a', 'b', 'c'];
arr.includes('b'); // Recorre todos

// Map: búsqueda constante O(1)
const map = new Map();
map.set('key', 'value');
map.has('key'); // Acceso directo
```

**¿Cuándo usar cada uno?**
- Array: Cuando importa el orden o necesitas iterar frecuentemente
- Map: Cuando necesitas buscar por clave rápidamente

#### 3. Programación Orientada a Objetos

**Clase:**

```typescript
class Validador {
  private variables: Map<string, Variable>;  // Propiedad privada
  
  validate(program: Program): Result {        // Método público
    // ...
  }
}
```

**Encapsulación:**
- `private`: Solo accesible dentro de la clase
- `public`: Accesible desde cualquier lugar

**¿Por qué?** Controla el acceso y protege la integridad de los datos.

#### 4. Recursión

Función que se llama a sí misma.

**Ejemplo en el validador:**

```typescript
validateExpression(expr: Expression) {
  if (expr.kind === 'binary') {
    this.validateExpression(expr.left);   // ← recursión
    this.validateExpression(expr.right);  // ← recursión
  }
}
```

**Casos de uso:**
- Recorrer árboles (como nuestro AST)
- Procesar estructuras anidadas
- Algoritmos tipo divide y conquista

#### 5. Patrones de Diseño

**Strategy Pattern** (en el generador):

```typescript
// Diferentes estrategias para generar cada tipo de sentencia
generateStatement(stmt: Statement) {
  switch (stmt.kind) {
    case 'if': return this.generateIf(stmt);
    case 'while': return this.generateWhile(stmt);
    // ...
  }
}
```

**Observer Pattern** (en Blockly):

```typescript
workspace.addChangeListener(() => {
  // Se ejecuta cada vez que cambia el workspace
  onWorkspaceChange(workspace);
});
```

#### 6. Inmutabilidad

**Concepto:** No modificar datos existentes, crear nuevos.

```typescript
// ❌ Mutable
const arr = [1, 2, 3];
arr.push(4);  // Modifica el array original

// ✓ Inmutable
const arr = [1, 2, 3];
const newArr = [...arr, 4];  // Crea uno nuevo
```

**En React:** Los estados deben tratarse de forma inmutable.

#### 7. TypeScript: Tipado Estático

**Beneficios:**

1. **Autocompletado**: El IDE sugiere propiedades
2. **Detección de errores**: Antes de ejecutar
3. **Documentación**: Los tipos documentan el código

**Ejemplo:**

```typescript
// JavaScript (sin tipos)
function sumar(a, b) {
  return a + b;
}
sumar(5, "3");  // "53" (comportamiento inesperado)

// TypeScript (con tipos)
function sumar(a: number, b: number): number {
  return a + b;
}
sumar(5, "3");  // ❌ Error de compilación
```

---

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
npm run lint:fix

# Type checking
npm run type-check
```

---

## Recursos Adicionales

### Para Aprender Más

**TypeScript:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

**React:**
- [React Documentation](https://react.dev/)
- [React Hooks](https://react.dev/reference/react)

**Blockly:**
- [Blockly Developer Tools](https://developers.google.com/blockly)
- [Block Factory](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)

**Estructuras de Datos:**
- [JavaScript.info](https://javascript.info/)
- [Big O Notation](https://www.bigocheatsheet.com/)

**Patrones de Diseño:**
- [Refactoring Guru](https://refactoring.guru/design-patterns)
- [Patterns.dev](https://www.patterns.dev/)

---

## Glosario

- **AST**: Abstract Syntax Tree (Árbol de Sintaxis Abstracta)
- **JSX**: Sintaxis que mezcla JavaScript y HTML
- **Hook**: Función especial de React (useState, useEffect, etc.)
- **Componente**: Pieza reutilizable de UI en React
- **Props**: Propiedades que se pasan a un componente
- **Estado**: Datos que pueden cambiar y causan re-render
- **Workspace**: Área de trabajo de Blockly donde se colocan bloques
- **Toolbox**: Barra lateral con bloques disponibles en Blockly
- **Map**: Estructura de datos clave-valor optimizada
- **Enum**: Conjunto de constantes nombradas
- **Interface**: Contrato que define la forma de un objeto
- **Type Union**: Tipo que puede ser uno de varios tipos posibles
