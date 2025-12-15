
// Importa el tipo Level para definir el nivel especial de laboratorio (sandbox).
import type { Level } from './levels';

/**
 * Nivel Sandbox: experimentación libre sin restricciones.
 * Permite al usuario crear y probar algoritmos sin validación ni objetivos.
 */
// Nivel especial para el laboratorio libre.
// No tiene validación ni objetivo, solo fomenta la creatividad y la experimentación.
export const SANDBOX_LEVEL: Level = {
  id: 'sandbox-laboratorio',
  title: '🧪 Laboratorio Libre',
  description:
    '¡Experimenta! Este es tu espacio para probar ideas, combinar bloques y crear sin límites. No hay ejercicios, no hay validación. Solo tú y tu creatividad.',
  tips: [
    'Combina todo lo aprendido: variables, bucles, condicionales, arrays',
    'Prueba casos extremos y observa qué ocurre',
    'Comete errores y aprende de ellos',
    'Crea algoritmos divertidos o útiles',
  ],
  exercise: {
    goal: '¡No hay objetivo! Crea lo que quieras 🐔✨',
  },
};
