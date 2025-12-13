import { Level } from './levels';

// UD01 — Empezar a programar con Pseudocódigo
// 50 niveles con dificultad progresiva importados desde ud01_extended.ts

export { UD01_LEVELS } from './ud01_extended';

// Niveles antiguos (8) - mantenidos como referencia histórica
export const UD01_LEVELS_OLD: Level[] = [
  {
    id: 'ud01-1-introduccion',
    title: 'Introducción al pseudocódigo',
    description:
      'Estructura básica de un algoritmo: Algoritmo/FinAlgoritmo. Aprende a escribir tu primer programa y mostrar mensajes en pantalla.',
    tips: [
      'Todo algoritmo comienza con "Algoritmo <nombre>" y termina con "FinAlgoritmo"',
      'Usa "Escribir" para mostrar mensajes y valores',
      'Los textos van entre comillas: "Hola Mundo"',
    ],
    exercise: {
      goal: 'Crea un algoritmo llamado "Bienvenida" que muestre el mensaje "¡Bienvenido a Pseudo-LWay!"',
      expected: 'Algoritmo Bienvenida\n    Escribir "¡Bienvenido a Pseudo-LWay!"\nFinAlgoritmo',
    },
    starterXml: `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="pseudo_start" x="50" y="50">
    <field name="ALGO_NAME">Bienvenida</field>
  </block>
</xml>`,
  },
  {
    id: 'ud01-2-tipos-datos',
    title: 'Tipos de datos básicos',
    description: 'Aprende los 5 tipos fundamentales: int (enteros), double (decimales), boolean (verdadero/falso), String (texto) y char (un carácter).',
    tips: [
      'int: números enteros como 5, -10, 100',
      'double: números con decimales como 3.14, -2.5',
      'boolean: solo Verdadero o Falso',
      'String: textos entre comillas como "Hola"',
      'char: un solo carácter como "A"',
    ],
    exercise: {
      goal: 'Declara 5 variables (edad:int, altura:double, activo:boolean, nombre:String, inicial:char) y muestra cada una.',
    },
    starterXml: `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="pseudo_start" x="50" y="50">
    <field name="ALGO_NAME">TiposDatos</field>
    <next>
      <block type="pseudo_define">
        <field name="VAR_NAME">edad</field>
        <field name="VAR_TYPE">Entero</field>
        <next>
          <block type="pseudo_define">
            <field name="VAR_NAME">altura</field>
            <field name="VAR_TYPE">Real</field>
            <next>
              <block type="pseudo_define">
                <field name="VAR_NAME">activo</field>
                <field name="VAR_TYPE">Logico</field>
                <next>
                  <block type="pseudo_define">
                    <field name="VAR_NAME">nombre</field>
                    <field name="VAR_TYPE">Cadena</field>
                    <next>
                      <block type="pseudo_define">
                        <field name="VAR_NAME">inicial</field>
                        <field name="VAR_TYPE">Caracter</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,
  },
  {
    id: 'ud01-3-entrada-salida',
    title: 'Entrada y salida de datos',
    description: 'Interactúa con el usuario: pide datos con Leer y muéstralos con Escribir. La base de todo programa útil.',
    tips: [
      'Escribe un mensaje antes de Leer para que el usuario sepa qué introducir',
      'Leer guarda el valor en una variable previamente definida',
      'Puedes escribir texto y variables juntos',
    ],
    exercise: {
      goal: 'Pide el nombre y la edad del usuario, luego muestra "Hola [nombre], tienes [edad] años"',
    },
    starterXml: `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="pseudo_start" x="50" y="50">
    <field name="ALGO_NAME">Saludo</field>
    <next>
      <block type="pseudo_define">
        <field name="VAR_NAME">nombre</field>
        <field name="VAR_TYPE">Cadena</field>
        <next>
          <block type="pseudo_define">
            <field name="VAR_NAME">edad</field>
            <field name="VAR_TYPE">Entero</field>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,
  },
  {
    id: 'ud01-4-asignacion-operadores',
    title: 'Asignación y operadores aritméticos',
    description: 'Usa la flecha <- para asignar valores. Realiza cálculos con +, -, *, /, % (módulo/resto).',
    tips: [
      'La asignación va de derecha a izquierda: variable <- expresión',
      'El módulo (%) devuelve el resto de una división: 7 % 3 = 1',
      'Puedes combinar operaciones: (base * altura) / 2',
    ],
    exercise: {
      goal: 'Pide base y altura de un rectángulo, calcula área (base*altura) y perímetro (2*base + 2*altura), muestra ambos.',
    },
    starterXml: `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="pseudo_start" x="50" y="50">
    <field name="ALGO_NAME">Rectangulo</field>
    <next>
      <block type="pseudo_define">
        <field name="VAR_NAME">base</field>
        <field name="VAR_TYPE">Real</field>
        <next>
          <block type="pseudo_define">
            <field name="VAR_NAME">altura</field>
            <field name="VAR_TYPE">Real</field>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,
  },
  {
    id: 'ud01-5-condicionales',
    title: 'Condicionales: Si / Entonces / Sino',
    description: 'Toma decisiones según condiciones. Usa operadores relacionales: =, !=, <, <=, >, >= para comparar.',
    tips: [
      'Si <condición> Entonces ejecuta un bloque, Sino ejecuta otro',
      'Un número es par si num % 2 = 0',
      'Puedes anidar Si dentro de Si para decisiones múltiples',
    ],
    exercise: {
      goal: 'Pide un número y di si es positivo, negativo o cero. Luego di si es par o impar.',
    },
    starterXml: `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="pseudo_start" x="50" y="50">
    <field name="ALGO_NAME">ParImpar</field>
    <next>
      <block type="pseudo_define">
        <field name="VAR_NAME">numero</field>
        <field name="VAR_TYPE">Entero</field>
      </block>
    </next>
  </block>
</xml>`,
  },
  {
    id: 'ud01-6-bucles-mientras',
    title: 'Bucles: Mientras (While)',
    description: 'Repite acciones mientras una condición sea verdadera. Ideal cuando no sabes cuántas veces repetir.',
    tips: [
      'La condición se evalúa ANTES de cada repetición',
      'Asegúrate de modificar la variable de control dentro del bucle',
      'Evita bucles infinitos: la condición debe hacerse falsa en algún momento',
    ],
    exercise: {
      goal: 'Pide N y cuenta regresiva desde N hasta 1, mostrando cada número (usa Mientras).',
    },
    starterXml: `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="pseudo_start" x="50" y="50">
    <field name="ALGO_NAME">CuentaRegresiva</field>
    <next>
      <block type="pseudo_define">
        <field name="VAR_NAME">N</field>
        <field name="VAR_TYPE">Entero</field>
        <next>
          <block type="pseudo_define">
            <field name="VAR_NAME">contador</field>
            <field name="VAR_TYPE">Entero</field>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,
  },
  {
    id: 'ud01-7-bucles-para',
    title: 'Bucles: Para (For)',
    description: 'Itera un número exacto de veces con un contador. Más simple que Mientras cuando sabes las repeticiones.',
    tips: [
      'Sintaxis: Para i <- inicio Hasta fin Con Paso incremento Hacer',
      'El paso puede ser negativo para contar hacia atrás',
      'Si omites el paso, por defecto es 1',
    ],
    exercise: {
      goal: 'Pide N y muestra la tabla de multiplicar del N del 1 al 10 (N x 1 = ..., N x 2 = ..., etc).',
    },
    starterXml: `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="pseudo_start" x="50" y="50">
    <field name="ALGO_NAME">TablaMultiplicar</field>
    <next>
      <block type="pseudo_define">
        <field name="VAR_NAME">N</field>
        <field name="VAR_TYPE">Entero</field>
      </block>
    </next>
  </block>
</xml>`,
  },
  {
    id: 'ud01-8-casos-practicos',
    title: 'Caso integrador: Estadísticas básicas',
    description: 'Combina todo: entrada/salida, bucles, condicionales, operadores. Calcula suma, promedio, máximo y mínimo de N números.',
    tips: [
      'Usa un bucle Para para leer N números',
      'Acumula la suma en una variable',
      'Actualiza máximo y mínimo comparando en cada iteración',
      'El promedio es suma / cantidad',
    ],
    exercise: {
      goal: 'Pide N, lee N números y calcula: suma total, promedio, número máximo y número mínimo.',
    },
    starterXml: `<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="pseudo_start" x="50" y="50">
    <field name="ALGO_NAME">Estadisticas</field>
    <next>
      <block type="pseudo_define">
        <field name="VAR_NAME">N</field>
        <field name="VAR_TYPE">Entero</field>
        <next>
          <block type="pseudo_define">
            <field name="VAR_NAME">suma</field>
            <field name="VAR_TYPE">Real</field>
            <next>
              <block type="pseudo_define">
                <field name="VAR_NAME">maximo</field>
                <field name="VAR_TYPE">Real</field>
                <next>
                  <block type="pseudo_define">
                    <field name="VAR_NAME">minimo</field>
                    <field name="VAR_TYPE">Real</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,
  },
];
