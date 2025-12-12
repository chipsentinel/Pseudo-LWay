import { Level } from './levels';

// UD01 — Empezar a programar con Pseudocódigo (esqueleto basado en temario)
// Nota: Contenido a completar con el PDF, aquí se definen los apartados y objetivos.

export const UD01_LEVELS: Level[] = [
  {
    id: 'ud01-1-introduccion',
    title: 'Introducción al pseudocódigo',
    description:
      'Qué es el pseudocódigo y por qué es útil. Convenciones y estilo básico.',
    tips: [
      'Usa nombres de variables descriptivos',
      'Escribe paso a paso de forma clara',
      'Mantén una indentación consistente',
    ],
    exercise: {
      goal: 'Escribe un algoritmo con Algoritmo/FinAlgoritmo que muestre "Hola Pseudocódigo".',
      expected: 'Algoritmo MiAlgoritmo\n    Escribir "Hola Pseudocódigo"\nFinAlgoritmo',
    },
  },
  {
    id: 'ud01-2-tipos-datos',
    title: 'Tipos de datos básicos',
    description: 'Entero, Real, Lógico, Cadena, Carácter (Java: int, double, boolean, String, char).',
    tips: [
      'Elige el tipo según el uso: números, texto o condiciones',
      'Convierte tipos si es necesario (p. ej. texto a número)',
    ],
    exercise: {
      goal: 'Declara 5 variables: int, double, boolean, String y char; escribe sus valores.',
    },
  },
  {
    id: 'ud01-3-entrada-salida',
    title: 'Entrada y salida',
    description: 'Leer y Escribir: interacción básica con el usuario.',
    tips: [
      'Muestra mensajes claros al pedir datos',
      'Valida lo leído si es posible',
    ],
    exercise: {
      goal: 'Lee un nombre y una edad, luego escribe un saludo con ambos.',
    },
  },
  {
    id: 'ud01-4-asignacion-operadores',
    title: 'Asignación y operadores',
    description: 'Asignar valores y operar: aritméticos, relacionales y lógicos.',
    tips: [
      'Recuerda la flecha de asignación <-',
      'Combina operadores para expresiones más útiles',
    ],
    exercise: {
      goal: 'Calcula el área de un rectángulo a partir de base y altura leídas.',
    },
  },
  {
    id: 'ud01-5-condicionales',
    title: 'Condicionales (Si / Sino)',
    description: 'Toma de decisiones con condiciones verdaderas o falsas.',
    tips: [
      'Piensa en casos positivos y negativos',
      'Usa Sino para la alternativa',
    ],
    exercise: {
      goal: 'Lee un número y di si es par o impar.',
    },
  },
  {
    id: 'ud01-6-bucles-mientras',
    title: 'Bucles Mientras',
    description: 'Repetición controlada por condición.',
    tips: [
      'Asegúrate de que la condición pueda cambiar',
      'Evita bucles infinitos',
    ],
    exercise: {
      goal: 'Lee N y escribe números desde N hasta 1 usando Mientras.',
    },
  },
  {
    id: 'ud01-7-bucles-para',
    title: 'Bucles Para',
    description: 'Contadores y rangos definidos.',
    tips: [
      'Define inicio, fin y paso',
      'El contador se incrementa automáticamente',
    ],
    exercise: {
      goal: 'Lee N y cuenta del 1 al N usando Para.',
    },
  },
  {
    id: 'ud01-8-casos-practicos',
    title: 'Casos prácticos integradores',
    description: 'Aplicación de todo lo aprendido en pequeños retos.',
    tips: [
      'Descompón el problema en pasos simples',
      'Valida las entradas y muestra resultados claros',
    ],
    exercise: {
      goal: 'Sumar notas introducidas hasta introducir -1 y calcular la media.',
    },
  },
];
