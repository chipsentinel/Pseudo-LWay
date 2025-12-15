
// Importa el tipo Level para definir los niveles progresivos de la unidad didáctica 01.
import { Level } from './levels';

// 50 NIVELES PROGRESIVOS - De básico a avanzado.
// Cada nivel incrementa la dificultad y cubre conceptos fundamentales de programación.
// Esta lista es la fuente principal para la progresión de la UD01.
export const UD01_LEVELS: Level[] = [
  // NIVELES 1-5: FUNDAMENTOS BÁSICOS
  {
    id: 'ud01-1-hola-mundo',
    title: 'Primer algoritmo: Hola Mundo',
    description: 'Aprende la estructura básica: Algoritmo/FinAlgoritmo y muestra tu primer mensaje.',
    tips: [
      'Todo algoritmo empieza con "Algoritmo <nombre>"',
      'Usa "Escribir" para mostrar mensajes',
      'Termina siempre con "FinAlgoritmo"',
    ],
    exercise: {
      goal: 'Crea un algoritmo llamado "HolaMundo" que muestre "¡Hola Mundo!"',
      expected: 'Algoritmo HolaMundo\n    Escribir "¡Hola Mundo!"\nFinAlgoritmo',
    },
  },
  {
    id: 'ud01-2-definir-variable',
    title: 'Tu primera variable',
    description: 'Declara una variable entera llamada "edad" y muéstrala.',
    tips: [
      'Usa "Definir" para crear variables',
      'Los nombres no llevan espacios',
      'Puedes mostrar variables con Escribir',
    ],
    exercise: {
      goal: 'Define una variable "edad" de tipo Entero y escríbela.',
    },
  },
  {
    id: 'ud01-3-asignar-valor',
    title: 'Asignar valores',
    description: 'Asigna el valor 25 a la variable edad usando el operador <-',
    tips: [
      'La asignación usa la flecha: variable <- valor',
      'Primero define, luego asigna',
      'Los números no llevan comillas',
    ],
    exercise: {
      goal: 'Define edad, asígnale 25 y muéstrala.',
    },
  },
  {
    id: 'ud01-4-leer-datos',
    title: 'Leer entrada del usuario',
    description: 'Pide al usuario que introduzca su nombre y salúdalo.',
    tips: [
      'Leer guarda el valor en una variable',
      'Escribe un mensaje antes de leer',
      'Las cadenas de texto van entre comillas',
    ],
    exercise: {
      goal: 'Lee un nombre y muestra "Hola, [nombre]"',
    },
  },
  {
    id: 'ud01-5-suma-basica',
    title: 'Suma de dos números',
    description: 'Lee dos números y muestra su suma.',
    tips: [
      'Define variables para cada número',
      'Usa + para sumar',
      'Guarda el resultado en otra variable',
    ],
    exercise: {
      goal: 'Lee dos números y muestra su suma.',
    },
  },

  // NIVELES 6-10: OPERACIONES BÁSICAS
  {
    id: 'ud01-6-resta',
    title: 'Resta y multiplicación',
    description: 'Calcula la resta y multiplicación de dos números.',
    tips: [
      'Usa - para restar',
      'Usa * para multiplicar',
      'Puedes hacer varias operaciones',
    ],
    exercise: {
      goal: 'Lee dos números, calcula resta y multiplicación, muestra ambos resultados.',
    },
  },
  {
    id: 'ud01-7-division',
    title: 'División y módulo',
    description: 'Aprende la división (/) y el resto (%).',
    tips: [
      'La división con / da decimales',
      'El módulo % da el resto',
      '7 % 3 = 1 (resto de dividir 7 entre 3)',
    ],
    exercise: {
      goal: 'Lee dos números, muestra división y resto.',
    },
  },
  {
    id: 'ud01-8-area-rectangulo',
    title: 'Área de un rectángulo',
    description: 'Calcula área = base * altura',
    tips: [
      'Lee base y altura',
      'Multiplica para obtener el área',
      'Usa variables con nombres descriptivos',
    ],
    exercise: {
      goal: 'Lee base y altura, calcula y muestra el área.',
    },
  },
  {
    id: 'ud01-9-perimetro-rectangulo',
    title: 'Perímetro de un rectángulo',
    description: 'Calcula perímetro = 2 * (base + altura)',
    tips: [
      'Usa paréntesis para orden de operaciones',
      'Suma primero, luego multiplica',
    ],
    exercise: {
      goal: 'Lee base y altura, calcula y muestra el perímetro.',
    },
  },
  {
    id: 'ud01-10-promedio-3',
    title: 'Promedio de 3 números',
    description: 'Calcula el promedio de tres números.',
    tips: [
      'Suma los tres números',
      'Divide entre 3',
      'Usa variables Real para decimales',
    ],
    exercise: {
      goal: 'Lee 3 números, calcula y muestra su promedio.',
    },
  },

  // NIVELES 11-15: CONDICIONALES SIMPLES
  {
    id: 'ud01-11-positivo-negativo',
    title: 'Positivo o negativo',
    description: 'Determina si un número es positivo o negativo.',
    tips: [
      'Usa Si...Entonces...Sino',
      'Compara con > 0',
      'Recuerda el caso del cero',
    ],
    exercise: {
      goal: 'Lee un número y di si es positivo, negativo o cero.',
    },
  },
  {
    id: 'ud01-12-mayor-de-dos',
    title: 'El mayor de dos',
    description: 'Compara dos números y muestra el mayor.',
    tips: [
      'Usa el operador >',
      'Si a > b entonces a es mayor',
      'Considera el caso de igualdad',
    ],
    exercise: {
      goal: 'Lee dos números y muestra cuál es mayor.',
    },
  },
  {
    id: 'ud01-13-par-impar',
    title: 'Par o impar',
    description: 'Determina si un número es par o impar.',
    tips: [
      'Un número es par si num % 2 = 0',
      'Si el resto es 0, es par',
      'Si no, es impar',
    ],
    exercise: {
      goal: 'Lee un número y di si es par o impar.',
    },
  },
  {
    id: 'ud01-14-aprobado',
    title: 'Aprobado o suspenso',
    description: 'Si la nota es >= 5, está aprobado.',
    tips: [
      'Usa >= para mayor o igual',
      'Define un umbral (5)',
      'Mensaje claro según resultado',
    ],
    exercise: {
      goal: 'Lee una nota y di si está aprobado (>=5) o suspenso.',
    },
  },
  {
    id: 'ud01-15-descuento',
    title: 'Descuento del 10%',
    description: 'Si la compra supera 100€, aplica 10% descuento.',
    tips: [
      'Calcula: precio - (precio * 0.1)',
      'Compara con 100',
      'Muestra precio final',
    ],
    exercise: {
      goal: 'Lee precio, aplica descuento si >100€, muestra total.',
    },
  },

  // NIVELES 16-20: CONDICIONALES ANIDADOS
  {
    id: 'ud01-16-mayor-de-tres',
    title: 'Mayor de tres números',
    description: 'Encuentra el mayor entre 3 números usando Si anidados.',
    tips: [
      'Compara a con b primero',
      'Luego compara el mayor con c',
      'Usa Si dentro de Si',
    ],
    exercise: {
      goal: 'Lee 3 números y muestra el mayor.',
    },
  },
  {
    id: 'ud01-17-calificacion',
    title: 'Clasificación de notas',
    description: 'Clasifica notas: Excelente (>=9), Notable (>=7), Aprobado (>=5), Suspenso',
    tips: [
      'Usa varios Si...Entonces',
      'Comprueba de mayor a menor',
      'Cubre todos los casos',
    ],
    exercise: {
      goal: 'Lee nota y clasifícala en 4 categorías.',
    },
  },
  {
    id: 'ud01-18-edad-categoria',
    title: 'Categoría por edad',
    description: 'Clasifica: Niño (<13), Adolescente (13-17), Adulto (18-64), Senior (>=65)',
    tips: [
      'Define rangos claros',
      'Usa <= y >=',
      'Verifica límites',
    ],
    exercise: {
      goal: 'Lee edad y asigna categoría.',
    },
  },
  {
    id: 'ud01-19-bisiesto',
    title: 'Año bisiesto',
    description: 'Un año es bisiesto si es divisible por 4, excepto si es por 100, excepto si es por 400.',
    tips: [
      'Usa operadores lógicos Y, O',
      'año % 4 = 0 es condición base',
      'Excepciones con año % 100 y % 400',
    ],
    exercise: {
      goal: 'Lee un año y di si es bisiesto.',
    },
  },
  {
    id: 'ud01-20-triangulo-tipo',
    title: 'Tipo de triángulo',
    description: 'Clasifica triángulo por lados: Equilátero (3 iguales), Isósceles (2 iguales), Escaleno (ninguno igual)',
    tips: [
      'Compara los 3 lados',
      'Equilátero: a=b Y b=c',
      'Isósceles: al menos 2 iguales',
    ],
    exercise: {
      goal: 'Lee 3 lados y clasifica el triángulo.',
    },
  },

  // NIVELES 21-25: BUCLES FOR BÁSICOS
  {
    id: 'ud01-21-contar-1-10',
    title: 'Contar del 1 al 10',
    description: 'Usa un bucle Para para contar del 1 al 10.',
    tips: [
      'Para i <- 1 Hasta 10 Con Paso 1',
      'Escribe i en cada vuelta',
      'El bucle se detiene automáticamente',
    ],
    exercise: {
      goal: 'Muestra los números del 1 al 10.',
    },
  },
  {
    id: 'ud01-22-contar-n',
    title: 'Contar hasta N',
    description: 'Lee N y cuenta del 1 al N.',
    tips: [
      'Usa N como fin del bucle',
      'Para i <- 1 Hasta N',
    ],
    exercise: {
      goal: 'Lee N y muestra números del 1 al N.',
    },
  },
  {
    id: 'ud01-23-cuenta-regresiva',
    title: 'Cuenta regresiva',
    description: 'Lee N y cuenta de N a 1 (hacia atrás).',
    tips: [
      'Usa Paso -1 para decrementar',
      'Para i <- N Hasta 1 Con Paso -1',
    ],
    exercise: {
      goal: 'Lee N y cuenta regresivamente de N a 1.',
    },
  },
  {
    id: 'ud01-24-pares-hasta-n',
    title: 'Números pares hasta N',
    description: 'Muestra todos los pares del 2 al N.',
    tips: [
      'Empieza en 2',
      'Incrementa de 2 en 2: Paso 2',
    ],
    exercise: {
      goal: 'Lee N y muestra todos los pares hasta N.',
    },
  },
  {
    id: 'ud01-25-suma-n-numeros',
    title: 'Suma de N números',
    description: 'Lee N números y calcula su suma total.',
    tips: [
      'Inicializa suma en 0',
      'En cada vuelta, suma el nuevo número',
      'Usa un bucle Para de 1 a N',
    ],
    exercise: {
      goal: 'Lee N, luego lee N números y muestra la suma.',
    },
  },

  // NIVELES 26-30: BUCLES FOR AVANZADOS
  {
    id: 'ud01-26-tabla-multiplicar',
    title: 'Tabla de multiplicar',
    description: 'Lee N y muestra su tabla del 1 al 10.',
    tips: [
      'Para i <- 1 Hasta 10',
      'Muestra N x i = resultado',
    ],
    exercise: {
      goal: 'Lee N y muestra su tabla de multiplicar.',
    },
  },
  {
    id: 'ud01-27-factorial',
    title: 'Factorial de N',
    description: 'Calcula N! = N * (N-1) * ... * 1',
    tips: [
      'Inicializa factorial en 1',
      'Multiplica por cada número de 1 a N',
    ],
    exercise: {
      goal: 'Lee N y calcula N!',
    },
  },
  {
    id: 'ud01-28-fibonacci',
    title: 'Secuencia Fibonacci',
    description: 'Genera los primeros N números de Fibonacci (0,1,1,2,3,5,8...)',
    tips: [
      'Empieza con a=0, b=1',
      'El siguiente es suma de los dos anteriores',
      'Actualiza a y b en cada vuelta',
    ],
    exercise: {
      goal: 'Lee N y muestra los primeros N números Fibonacci.',
    },
  },
  {
    id: 'ud01-29-potencia',
    title: 'Calcular potencia',
    description: 'Lee base y exponente, calcula base^exponente sin operador potencia.',
    tips: [
      'Multiplica base por sí misma N veces',
      'Inicializa resultado en 1',
    ],
    exercise: {
      goal: 'Lee base y exponente, calcula la potencia.',
    },
  },
  {
    id: 'ud01-30-suma-pares-impares',
    title: 'Suma pares e impares separados',
    description: 'Lee N números y calcula suma de pares y suma de impares por separado.',
    tips: [
      'Dos contadores: sumaPares y sumaImpares',
      'Usa % 2 para distinguir',
    ],
    exercise: {
      goal: 'Lee N números, muestra suma pares y suma impares.',
    },
  },

  // NIVELES 31-35: BUCLES WHILE
  {
    id: 'ud01-31-while-basico',
    title: 'Mientras básico',
    description: 'Cuenta del 1 al 10 con Mientras en vez de Para.',
    tips: [
      'Inicializa contador antes del bucle',
      'Mientras contador <= 10',
      'Incrementa contador dentro del bucle',
    ],
    exercise: {
      goal: 'Cuenta del 1 al 10 usando Mientras.',
    },
  },
  {
    id: 'ud01-32-leer-hasta-cero',
    title: 'Leer hasta encontrar 0',
    description: 'Lee números hasta que el usuario introduzca 0, cuenta cuántos leyó.',
    tips: [
      'Inicializa contador en 0',
      'Mientras numero != 0',
      'Lee dentro del bucle',
    ],
    exercise: {
      goal: 'Lee números hasta leer 0, muestra cantidad leída.',
    },
  },
  {
    id: 'ud01-33-suma-hasta-negativo',
    title: 'Sumar hasta negativo',
    description: 'Lee números y súmalos, detente cuando leas un negativo.',
    tips: [
      'Inicializa suma y numero',
      'Mientras numero >= 0',
    ],
    exercise: {
      goal: 'Suma números hasta leer uno negativo.',
    },
  },
  {
    id: 'ud01-34-adivinar-numero',
    title: 'Adivinar número (simulado)',
    description: 'El usuario adivina un número fijo (ej: 42). Sigue pidiendo hasta acertar.',
    tips: [
      'Define secreto = 42',
      'Mientras intento != secreto',
      'Da pistas: mayor o menor',
    ],
    exercise: {
      goal: 'Usuario adivina el número 42, da pistas.',
    },
  },
  {
    id: 'ud01-35-validar-entrada',
    title: 'Validar rango de entrada',
    description: 'Pide un número entre 1 y 10, repite hasta que sea válido.',
    tips: [
      'Mientras numero < 1 O numero > 10',
      'Pide de nuevo',
    ],
    exercise: {
      goal: 'Lee número entre 1 y 10, repite si no es válido.',
    },
  },

  // NIVELES 36-40: ALGORITMOS ESTADÍSTICOS
  {
    id: 'ud01-36-promedio-n',
    title: 'Promedio de N números',
    description: 'Lee N números, calcula promedio.',
    tips: [
      'Suma todos con bucle',
      'Divide suma entre N',
    ],
    exercise: {
      goal: 'Lee N números y calcula su promedio.',
    },
  },
  {
    id: 'ud01-37-maximo-minimo',
    title: 'Máximo y mínimo',
    description: 'Lee N números, encuentra el mayor y el menor.',
    tips: [
      'Inicializa max y min con el primer número',
      'Compara cada nuevo número',
    ],
    exercise: {
      goal: 'Lee N números, muestra máximo y mínimo.',
    },
  },
  {
    id: 'ud01-38-contar-positivos',
    title: 'Contar positivos, negativos y ceros',
    description: 'Lee N números, cuenta cuántos son positivos, negativos y ceros.',
    tips: [
      'Tres contadores',
      'Usa Si para clasificar cada número',
    ],
    exercise: {
      goal: 'Lee N números, cuenta positivos, negativos y ceros.',
    },
  },
  {
    id: 'ud01-39-mayor-menor-que-promedio',
    title: 'Mayores y menores que el promedio',
    description: 'Lee N números, calcula promedio, luego di cuántos son mayores y menores que el promedio.',
    tips: [
      'Primer bucle: leer y sumar',
      'Calcular promedio',
      'Segundo bucle: comparar (requiere guardar números)',
    ],
    exercise: {
      goal: 'Indica cuántos números son mayores y menores que el promedio (nota: difícil sin arreglos).',
    },
  },
  {
    id: 'ud01-40-rango',
    title: 'Calcular rango',
    description: 'Lee N números, calcula rango = máximo - mínimo.',
    tips: [
      'Encuentra máximo y mínimo',
      'Resta: max - min',
    ],
    exercise: {
      goal: 'Lee N números, calcula y muestra el rango.',
    },
  },

  // NIVELES 41-45: ALGORITMOS NUMÉRICOS AVANZADOS
  {
    id: 'ud01-41-numero-primo',
    title: 'Verificar número primo',
    description: 'Lee N y determina si es primo (solo divisible por 1 y sí mismo).',
    tips: [
      'Prueba divisores desde 2 hasta N-1',
      'Si encuentra un divisor, no es primo',
      'Usa % para comprobar',
    ],
    exercise: {
      goal: 'Lee N y di si es primo.',
    },
  },
  {
    id: 'ud01-42-divisores',
    title: 'Listar divisores',
    description: 'Lee N y muestra todos sus divisores.',
    tips: [
      'Para i <- 1 Hasta N',
      'Si N % i = 0, i es divisor',
    ],
    exercise: {
      goal: 'Lee N y lista todos sus divisores.',
    },
  },
  {
    id: 'ud01-43-mcd',
    title: 'Máximo Común Divisor (MCD)',
    description: 'Calcula el MCD de dos números usando algoritmo de Euclides.',
    tips: [
      'Mientras b != 0',
      'Calcula resto = a % b',
      'a <- b, b <- resto',
    ],
    exercise: {
      goal: 'Lee dos números y calcula su MCD.',
    },
  },
  {
    id: 'ud01-44-mcm',
    title: 'Mínimo Común Múltiplo (MCM)',
    description: 'Calcula MCM usando: MCM = (a * b) / MCD(a,b)',
    tips: [
      'Primero calcula MCD',
      'Luego: MCM = (a * b) / MCD',
    ],
    exercise: {
      goal: 'Lee dos números y calcula su MCM.',
    },
  },
  {
    id: 'ud01-45-suma-digitos',
    title: 'Suma de dígitos',
    description: 'Lee un número y suma sus dígitos (ej: 123 -> 1+2+3=6).',
    tips: [
      'Mientras numero > 0',
      'Extrae dígito: numero % 10',
      'Elimina dígito: numero / 10 (división entera)',
    ],
    exercise: {
      goal: 'Lee un número y suma sus dígitos.',
    },
  },

  // NIVELES 46-50: PROBLEMAS INTEGRADORES COMPLEJOS
  {
    id: 'ud01-46-perfectos',
    title: 'Números perfectos',
    description: 'Un número perfecto es igual a la suma de sus divisores propios (ej: 6 = 1+2+3).',
    tips: [
      'Encuentra todos los divisores < N',
      'Suma los divisores',
      'Compara con N',
    ],
    exercise: {
      goal: 'Lee N y di si es perfecto.',
    },
  },
  {
    id: 'ud01-47-serie-geometrica',
    title: 'Serie geométrica',
    description: 'Calcula suma de serie: 1 + r + r^2 + r^3 + ... + r^n',
    tips: [
      'Lee r (razón) y n (términos)',
      'Acumula potencias de r',
    ],
    exercise: {
      goal: 'Lee r y n, calcula suma de serie geométrica.',
    },
  },
  {
    id: 'ud01-48-piramide-numeros',
    title: 'Pirámide de números',
    description: 'Lee N y dibuja pirámide: 1, 1 2, 1 2 3, ..., 1 2 ... N (requiere bucles anidados).',
    tips: [
      'Bucle exterior: líneas (1 a N)',
      'Bucle interior: números en cada línea',
    ],
    exercise: {
      goal: 'Lee N y muestra pirámide de números.',
    },
  },
  {
    id: 'ud01-49-palindromo',
    title: 'Verificar palíndromo numérico',
    description: 'Lee un número y verifica si es palíndromo (se lee igual al revés).',
    tips: [
      'Invierte el número (suma dígitos al revés)',
      'Compara original con invertido',
    ],
    exercise: {
      goal: 'Lee un número y di si es palíndromo.',
    },
  },
  {
    id: 'ud01-50-analisis-completo',
    title: 'Análisis completo de lista',
    description: 'Lee N números y calcula: suma, promedio, máximo, mínimo, cantidad pares/impares, cantidad primos.',
    tips: [
      'Combina todas las técnicas aprendidas',
      'Un bucle para leer y procesar todo',
      'Varios contadores y comparaciones',
    ],
    exercise: {
      goal: 'Análisis estadístico completo de N números: suma, promedio, max, min, pares, impares, primos.',
    },
  },
];
