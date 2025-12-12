export interface Level {
  id: string;
  title: string;
  description: string;
  tips: string[];
  starterXml?: string;
}

export const LEVELS: Level[] = [
  {
    id: 'lvl-1-suma',
    title: 'Sumar dos números',
    description:
      'Lee dos números, súmalos y muestra el resultado. Usa Definir, Leer, Asignar y Escribir.',
    tips: [
      'Define las variables antes de usarlas',
      'Usa el bloque Asignar para calcular la suma',
      'Muestra un texto y luego la variable de resultado',
    ],
  },
  {
    id: 'lvl-2-mayor',
    title: 'El mayor de dos',
    description:
      'Lee dos números y muestra cuál es el mayor. Usa Si-Entonces-Sino y operadores de comparación.',
    tips: [
      'Compara con > y <',
      'Recuerda que Sino se ejecuta si la condición es falsa',
      'Escribe mensajes claros para el usuario',
    ],
  },
  {
    id: 'lvl-3-contador',
    title: 'Contar del 1 al N',
    description:
      'Lee un número N y cuenta desde 1 hasta N mostrando cada número. Usa Para con contador.',
    tips: [
      'El bloque Para necesita inicio, fin y paso',
      'El contador se incrementa automáticamente según el paso',
      'Escribe el valor del contador en cada iteración',
    ],
  },
];
