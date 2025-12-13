# Pseudo-LWay
Editor visual de pseudocódigo educativo con temática neon y progresión gamificada.


<p align="center">
  <img src="https://raw.githubusercontent.com/chipsentinel/Pseudo-LWay/dev/public/Pseudo-LWAY-logo.svg" alt="Pseudo-LWay Logo" width="240" /><br>
  <span style="font-size:2.2em; font-weight:bold;">Pseudo-LWay</span>
</p>

<p align="center">
  <a href="https://img.shields.io/badge/version-1.0-blue?style=flat-square"><img src="https://img.shields.io/badge/version-1.0-blue?style=flat-square" alt="version"/></a>
  <a href="https://img.shields.io/badge/status-beta-yellow?style=flat-square"><img src="https://img.shields.io/badge/status-beta-yellow?style=flat-square" alt="status"/></a>
  <a href="https://img.shields.io/badge/React-19.2.0-61dafb?logo=react&logoColor=white&style=flat-square"><img src="https://img.shields.io/badge/React-19.2.0-61dafb?logo=react&logoColor=white&style=flat-square" alt="React"/></a>
  <a href="https://img.shields.io/badge/Vite-7.2.5-646cff?logo=vite&logoColor=white&style=flat-square"><img src="https://img.shields.io/badge/Vite-7.2.5-646cff?logo=vite&logoColor=white&style=flat-square" alt="Vite"/></a>
  <a href="https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript&logoColor=white&style=flat-square"><img src="https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript"/></a>
  <a href="https://img.shields.io/badge/Blockly-12.3.1-ffcb2b?logo=google&logoColor=black&style=flat-square"><img src="https://img.shields.io/badge/Blockly-12.3.1-ffcb2b?logo=google&logoColor=black&style=flat-square" alt="Blockly"/></a>
  <a href="https://img.shields.io/badge/Integral-Integrado-blueviolet?style=flat-square"><img src="https://img.shields.io/badge/Integral-Integrado-blueviolet?style=flat-square" alt="Integral"/></a>
  <a href="https://img.shields.io/badge/license-MIT-green?style=flat-square"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT"/></a>
</p>

**Editor visual de pseudocódigo educativo con temática neon y progresión gamificada**

Aprende pseudocódigo de forma divertida y estructurada, con 50 niveles progresivos, feedback inmediato y una interfaz moderna inspirada en el logo y colores cyan, azul, morado y rosa.

---

**[Características](#características-principales) • [Instalación](#instalación-y-uso) • [Cómo Jugar](#cómo-jugar) • [Desarrollo](#desarrollo)**


## 🌟 Características Principales

### 📚 Sistema de Niveles Curriculares
- **UD01: Fundamentos** (8 niveles) - Variables, tipos de datos, entrada/salida, operadores, condicionales, bucles
- **UD02: Arrays** (6 niveles) - Declarar, recorrer, buscar, sumar, invertir arreglos
- **🧪 Laboratorio Libre** - Zona sandbox sin restricciones para experimentar
### 📚 Sistema de Niveles Curriculares
- **UD01: Fundamentos y Algoritmia** (50 niveles) - Desde Hola Mundo hasta algoritmos integradores: variables, tipos, entrada/salida, operadores, condicionales, bucles, arrays, funciones, validaciones, problemas clásicos y más.
- **🧪 Laboratorio Libre** - Zona sandbox sin restricciones para experimentar

### ✅ Validación y Feedback
- Validación automática de estructura de algoritmos
- Bloques obligatorios: `Algoritmo <nombre>` y `FinAlgoritmo`
- Feedback visual de éxito cuando completas correctamente un ejercicio
- Mensajes de error claros y detallados
### ✅ Validación y Feedback
- Validación automática de estructura y lógica de algoritmos en cada nivel
- Bloques obligatorios: `Algoritmo <nombre>` y `FinAlgoritmo` siempre requeridos
- Feedback visual inmediato: mensajes de error claros y mensaje de éxito al cumplir el objetivo
- Botón "Limpiar" para reiniciar el workspace, botón "Reset" para reiniciar todo el progreso

### 🎯 Navegación Secuencial
- Progresión bloqueada hasta completar cada nivel
- Botones Anterior/Siguiente con estado habilitado/deshabilitado
- Indicador de progreso: X / Y niveles completados
- Starter XML para guiar en niveles iniciales
### 🎯 Navegación y Progreso
- Progresión bloqueada: solo puedes avanzar si completas el nivel actual
- Botones Anterior/Siguiente y "Marcar como completado"
- Indicador de progreso: X / 50 niveles completados
- Starter XML para guiar en niveles iniciales
- Progreso guardado automáticamente en localStorage

### 🎨 Identidad Visual Elegante
- Paleta sunrise: gradientes suaves de amarillo dorado a rosa
- Logo sol naciente con rayo multicolor
- Mascota "poyo" (pollito) con actitud divertida
- Diseño oriental-minimalista con tipografía clara
### 🎨 Identidad Visual Neon
- Paleta neon: cyan, azul, morado, rosa, ámbar y menta
- Gradientes y sombras suaves para no dañar la vista
- Logo y UI inspirados en el estilo "futurista neon"
- Botones con gradientes y colores diferenciados (cyan, morado/rosa)

### 🧩 Editor Blockly Potente
- Bloques visuales arrastrables sin sintaxis complicada
- Categorías: Programa, Variables, Entrada/Salida, Control, Valores, Operadores
- Nomenclatura Java (int, double, boolean, String, char)
- Generación de pseudocódigo PSeInt válido
### 🧩 Editor Blockly Potente
- Bloques visuales arrastrables sin sintaxis complicada
- 6 categorías: Programa, Variables, Entrada/Salida, Control, Valores, Operadores
- Nomenclatura y sintaxis tipo PSeInt
- Generación de pseudocódigo válido y validación automática

---

## 🚀 Instalación y Uso

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/Pseudo-LWay.git
cd Pseudo-LWay

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Por defecto se abre en [http://localhost:5173](http://localhost:5173), pero si ese puerto está ocupado usará el siguiente disponible (ej: 5174, 5175).

---

## 📖 Estructura de Niveles
---

### UD01: Fundamentos del Pseudocódigo
1. **Introducción** - Estructura Algoritmo/FinAlgoritmo, bloque Escribir
2. **Tipos de datos** - int, double, boolean, String, char
3. **Entrada/Salida** - Leer y Escribir, interacción básica
4. **Asignación y operadores** - Flecha <-, operaciones aritméticas
5. **Condicionales** - Si/Entonces/Sino, operadores relacionales
6. **Bucles Mientras** - Repetición por condición
7. **Bucles Para** - Iteración con contador
8. **Caso integrador** - Estadísticas con suma, promedio, máximo, mínimo

### UD02: Estructuras de Datos - Arrays
1. **Declarar arreglos** - Dimension, acceso por índice
2. **Recorrer arreglos** - Bucle Para con índice
3. **Buscar máximo** - Comparación elemento a elemento
4. **Sumar elementos** - Acumulador en bucle
5. **Buscar elemento** - Bandera booleana
6. **Invertir arreglo** - Intercambio simétrico

### 🧪 Laboratorio Libre
Sin objetivos ni restricciones. Experimenta, combina conceptos y diviértete creando.


## 🛠️ Tecnologías



## 🎯 Bloques Disponibles

### 🏁 Programa

### 📦 Variables

### 💬 Entrada/Salida

### 🔀 Control de Flujo

### 🔢 Valores y Operadores


## 📋 Roadmap

### ✅ Completado

### 🚧 En Progreso

### 🔮 Futuro


## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama: `git checkout -b feature/nueva-caracteristica`
3. Commit tus cambios: `git commit -m 'feat: añadir nueva característica'`
4. Push a la rama: `git push origin feature/nueva-caracteristica`
5. Abre un Pull Request


## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.


## 👨‍💻 Autor

**Proyecto educativo DAW1 - Pseudo-LWay**

Aprende jugando bajo el sol naciente ☀️🐔


## 🙏 Agradecimientos



## 📂 Estructura del Proyecto

```
src/
├── core/                 # Lógica de negocio
│   ├── types.ts         # Definiciones del AST (Program, Statement, Expression)
│   ├── validator.ts     # Validador de algoritmos (variables, estructura)
│   └── generator.ts     # Generador de pseudocódigo PSeInt
├── features/
│   ├── editor/          # Editor Blockly
│   │   ├── blockDefinitions.ts   # Definiciones de bloques
│   │   ├── blocklyConverter.ts   # Conversor Blockly → AST
│   │   └── BlocklyEditor.tsx     # Componente React
│   └── levels/          # Sistema de niveles
│       ├── levels.ts    # Interface Level y niveles legacy
│       ├── ud01.ts      # 8 niveles de fundamentos
│       ├── ud02.ts      # 6 niveles de arrays
│       └── sandbox.ts   # Laboratorio libre
├── components/
│   ├── App.tsx          # Componente principal
│   ├── App.css          # Estilos globales con tema sunrise
│   └── LevelsSidebar.tsx # Navegación de niveles
├── assets/              # Logos y mascota (sunrise_lightning.svg, poyo.svg)
└── main.tsx            # Punto de entrada
```
```
