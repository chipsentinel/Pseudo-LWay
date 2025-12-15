<p align="center">
  <img src="https://raw.githubusercontent.com/chipsentinel/Pseudo-LWay/dev/public/Pseudo-LWAY-logo.svg" alt="Pseudo-LWay Logo" width="240" />
  <span style="font-size:2.2em; font-weight:bold;">Pseudo-LWay</span>
</p>

<p align="center">
  <a href="https://img.shields.io/badge/version-1.0-blue?style=flat-square"><img src="https://img.shields.io/badge/version-1.0-blue?style=flat-square" alt="version"/></a>
  <a href="https://img.shields.io/badge/status-beta-yellow?style=flat-square"><img src="https://img.shields.io/badge/status-beta-yellow?style=flat-square" alt="status"/></a>
  <a href="https://img.shields.io/badge/React-19.2.0-61dafb?logo=react&logoColor=white&style=flat-square"><img src="https://img.shields.io/badge/React-19.2.0-61dafb?logo=react&logoColor=white&style=flat-square" alt="React"/></a>
  <a href="https://img.shields.io/badge/Vite-7.2.5-646cff?logo=vite&logoColor=white&style=flat-square"><img src="https://img.shields.io/badge/Vite-7.2.5-646cff?logo=vite&logoColor=white&style=flat-square" alt="Vite"/></a>
  <a href="https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript&logoColor=white&style=flat-square"><img src="https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript"/></a>
  <a href="https://img.shields.io/badge/Blockly-12.3.1-ffcb2b?logo=google&logoColor=black&style=flat-square"><img src="https://img.shields.io/badge/Blockly-12.3.1-ffcb2b?logo=google&logoColor=black&style=flat-square" alt="Blockly"/></a>
  <a href="https://img.shields.io/badge/license-MIT-green?style=flat-square"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT"/></a>
</p>

<h2 align="center">Editor visual de pseudocódigo educativo con temática neon y progresión gamificada</h2>

Aprende pseudocódigo de forma divertida y estructurada, con 50 niveles progresivos, feedback inmediato y una interfaz moderna inspirada en colores cyan, azul, morado y rosa.

---

## Tabla de Contenidos

- [Características](#características)
- [Instalación y Uso](#instalación-y-uso)
- [Inicialización del API y entorno](#inicialización-del-api-y-entorno)
- [Estructura de Niveles](#estructura-de-niveles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Autor](#autor)

---

## 🌟 Características

- **Sistema de niveles curriculares**: 50 niveles progresivos (variables, tipos, entrada/salida, operadores, condicionales, bucles, arrays, funciones, problemas clásicos y más) y laboratorio libre para experimentar.
- **Validación y feedback**: Validación automática de estructura y lógica de algoritmos en cada nivel. Bloques obligatorios: `Algoritmo <nombre>` y `FinAlgoritmo`. Feedback visual inmediato y mensajes de error claros.
- **Navegación y progreso**: Progresión bloqueada hasta completar cada nivel, botones Anterior/Siguiente, indicador de progreso, starter XML y guardado automático en localStorage.
- **Identidad visual neon**: Paleta neon (cyan, azul, morado, rosa, ámbar, menta), gradientes suaves, logo y UI futurista, botones diferenciados.
- **Editor Blockly potente**: Bloques visuales arrastrables, 6 categorías (Programa, Variables, Entrada/Salida, Control, Valores, Operadores), nomenclatura tipo PSeInt, generación y validación automática de pseudocódigo.

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

La aplicación se abrirá en [http://localhost:5173](http://localhost:5173) (o el siguiente puerto disponible).

---

## ⚡ Inicialización del API y entorno

Actualmente, Pseudo-LWay funciona completamente en el navegador y no requiere backend real. Toda la persistencia se realiza en localStorage.

**¿Quieres añadir un backend/API?**

1. Crea una carpeta `backend/` y añade tu servidor (por ejemplo, Express + SQLite):
   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install express sqlite3
   # Crea tu archivo index.js o index.ts y define las rutas necesarias
   node index.js
   ```
2. Actualiza el frontend para consumir el API (fetch/Axios, etc.).

**Comandos recomendados para inicializar el backend:**
```bash
# Desde la raíz del proyecto
cd backend
node index.js
```

> Si solo usas la versión actual (sin backend), no necesitas realizar estos pasos.

---

## 📖 Estructura de Niveles

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

---

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
│   ├── App.css          # Estilos globales con tema neon
│   └── LevelsSidebar.tsx # Navegación de niveles
├── assets/              # Logos y mascota (Pseudo-LWAY-logo.svg, poyo.svg)
└── main.tsx            # Punto de entrada
```

---

## ℹ️ Notas y Extensión

- Plataforma web para aprender y practicar pseudocódigo de forma visual, usando bloques tipo Blockly y niveles curriculares.
- Pensado para estudiantes, docentes, academias y autodidactas.
- Arrastra bloques para construir algoritmos y avanza por 50 niveles progresivos.
- Feedback inmediato, validación automática y progreso guardado en localStorage.
- Tecnologías: React, TypeScript, Vite, Blockly. Sin backend real por defecto.
- Para extender: añade niveles en `src/features/levels/`, crea bloques en `blockDefinitions.ts` y personaliza estilos en `App.css`.

---

## 🚀 Mejoras y Roadmap

- [ ] Exportación/importación de pseudocódigo y soluciones
- [ ] Soporte multiusuario (requiere backend real)
- [ ] Editor de bloques para docentes
- [ ] Modo oscuro y más temas visuales
- [ ] Integración con plataformas educativas (Google Classroom, Moodle)
- [ ] Mejorar accesibilidad y soporte móvil
- [ ] Más feedback visual y animaciones
- [ ] Traducción a más idiomas

---

## 📚 Documentación ampliada

Para más detalles, guías y temas avanzados, consulta la documentación extendida en la carpeta [`docs/`](docs/):

- [¿Qué es Pseudo-LWay?](docs/que-es.md)
- [¿Para quién es?](docs/para-quien.md)
- [¿Cómo funciona?](docs/como-funciona.md)
- [Tecnologías utilizadas](docs/tecnologias.md)
- [¿Cómo extender Pseudo-LWay?](docs/como-extender.md)
- [Wiki técnico detallado (WIKI.md)](WIKI.md)

Para una visión técnica profunda del proyecto, consulta el archivo [`WIKI.md`](WIKI.md), que incluye:
- Arquitectura y estructura de carpetas
- Explicación de módulos core y editor
- Guía de extensión y ejemplos de código
- Conceptos de programación y patrones
- Comandos útiles y recursos adicionales

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para colaborar:
1. Haz fork del proyecto
2. Crea una rama: `git checkout -b feature/nueva-caracteristica`
3. Realiza tus cambios y haz commit: `git commit -m 'feat: añadir nueva característica'`
4. Haz push a tu rama: `git push origin feature/nueva-caracteristica`
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Proyecto educativo DAW1 - Pseudo-LWay**
Aprende jugando bajo el sol naciente ☀️🐔

## 🙏 Agradecimientos
