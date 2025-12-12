# Pseudo-LWay

Editor visual de pseudocódigo orientado a estudiantes de Desarrollo de Aplicaciones Web.

## Descripción

Pseudo-LWay es una aplicación web educativa que permite construir algoritmos mediante bloques visuales editables, inspirada en herramientas como PSeInt y Scratch. El sistema garantiza una estructura correcta del algoritmo y genera pseudocódigo en formato PSeInt.

## Características

- Editor visual basado en bloques (Blockly)
- Validación automática de variables y estructura
- Generación de pseudocódigo estilo PSeInt
- Interfaz intuitiva y responsive
- Sin necesidad de backend ni base de datos

## Tecnologías

- React 19 + TypeScript
- Vite para desarrollo y build
- Blockly para el editor visual
- IndexedDB para persistencia local (planificado)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/Pseudo-LWay.git
cd Pseudo-LWay

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Uso

1. Arrastra bloques desde la barra lateral
2. Conecta los bloques para construir tu algoritmo
3. Presiona "Generar Pseudocódigo" para ver el resultado
4. El validador indicará cualquier error encontrado

## Bloques Disponibles

### Variables
- **Definir**: Declara una variable con su tipo
- **Asignar**: Asigna un valor a una variable
- **Variable**: Referencia a una variable declarada

### Entrada/Salida
- **Leer**: Lee un valor desde la entrada
- **Escribir**: Muestra un valor en la salida

### Control de Flujo
- **Si-Entonces-Sino**: Estructura condicional
- **Mientras**: Bucle con condición previa
- **Para**: Bucle con contador

### Valores y Operadores
- Literales: Número, Texto, Booleano
- Operadores aritméticos: +, -, *, /, %
- Operadores relacionales: =, !=, <, <=, >, >=
- Operadores lógicos: Y, O, NO

## Estructura del Proyecto

```
src/
├── core/                 # Lógica de negocio
│   ├── types.ts         # Definiciones del AST
│   ├── validator.ts     # Validador de algoritmos
│   └── generator.ts     # Generador de pseudocódigo
├── features/editor/      # Editor Blockly
├── components/           # Componentes React
└── main.tsx
```

## Documentación

Para información detallada sobre la arquitectura y extensión del proyecto, consulta el [Wiki](./WIKI.md).

## Roadmap

- Persistencia de proyectos con IndexedDB
- Exportación a Java
- Simulador de ejecución paso a paso
- Soporte para arreglos y funciones
- PWA para uso móvil

## Licencia

Este proyecto está bajo la Licencia MIT.

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
