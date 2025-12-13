import type { Level } from './levels';

/**
 * UD02: Arrays (Arreglos) - Estructuras de datos lineales
 * Niveles dedicados a arreglos unidimensionales en PSeInt
 */
export const UD02_LEVELS: Level[] = [
  {
    id: 'ud02-1-declarar-arreglo',
    title: 'Declarar y acceder a arreglos',
    description:
      'Un arreglo es una colección de valores del mismo tipo. Se declaran con Dimension y se accede por índice [i].',
    tips: [
      'Sintaxis: Dimension nombre[tamaño]',
      'Los índices empiezan en 0 (o 1 según configuración)',
      'Accede a un elemento con: arreglo[indice]',
    ],
    exercise: {
      goal: 'Declara un arreglo de 5 enteros llamado "numeros", asigna valores 10, 20, 30, 40, 50 a cada posición y muestra el elemento en índice 2.',
    },
  },
  {
    id: 'ud02-2-recorrer-arreglo',
    title: 'Recorrer arreglos con Para',
    description:
      'Usa un bucle Para con el contador como índice para procesar todos los elementos del arreglo.',
    tips: [
      'Declara el arreglo con su dimensión antes del bucle',
      'El índice suele ir de 0 (o 1) hasta tamaño-1 (o tamaño)',
      'Dentro del bucle puedes leer, asignar o mostrar cada elemento',
    ],
    exercise: {
      goal: 'Declara un arreglo de 10 enteros. Pide 10 números al usuario y guárdalos en el arreglo. Luego muestra todos los valores.',
    },
  },
  {
    id: 'ud02-3-buscar-maximo',
    title: 'Buscar el máximo en un arreglo',
    description:
      'Encuentra el valor más grande recorriendo el arreglo y comparando cada elemento con el máximo actual.',
    tips: [
      'Inicializa max con el primer elemento del arreglo',
      'Recorre desde el segundo elemento comparando',
      'Si encuentras un valor mayor, actualiza max',
    ],
    exercise: {
      goal: 'Lee 8 números en un arreglo y encuentra el máximo. Muestra "El máximo es: [valor]".',
    },
  },
  {
    id: 'ud02-4-sumar-elementos',
    title: 'Sumar elementos de un arreglo',
    description:
      'Acumula los valores de un arreglo recorriendo con bucle Para y sumando cada elemento a una variable acumuladora.',
    tips: [
      'Inicializa suma en 0 antes del bucle',
      'En cada iteración: suma <- suma + arreglo[i]',
      'Al finalizar el bucle, suma contiene la suma total',
    ],
    exercise: {
      goal: 'Lee 6 números decimales (double) en un arreglo, suma todos los valores y muestra "La suma es: [resultado]".',
    },
  },
  {
    id: 'ud02-5-buscar-elemento',
    title: 'Buscar un elemento en arreglo',
    description:
      'Determina si un valor existe en el arreglo recorriendo y comparando. Usa una bandera (boolean) para indicar si se encontró.',
    tips: [
      'Declara encontrado <- Falso antes del bucle',
      'Si arreglo[i] = valorBuscado, entonces encontrado <- Verdadero',
      'Después del bucle, verifica encontrado y muestra mensaje',
    ],
    exercise: {
      goal: 'Lee 5 números en un arreglo, luego pide un número X y di si X está en el arreglo o no.',
    },
  },
  {
    id: 'ud02-6-invertir-arreglo',
    title: 'Invertir un arreglo',
    description:
      'Invierte el orden de los elementos: el primero pasa al último, el segundo al penúltimo, etc.',
    tips: [
      'Recorre hasta la mitad del arreglo',
      'Intercambia arreglo[i] con arreglo[n-1-i]',
      'Usa una variable auxiliar para el intercambio',
    ],
    exercise: {
      goal: 'Lee 7 números en un arreglo, inviértelo y muestra el arreglo invertido.',
    },
  },
];
