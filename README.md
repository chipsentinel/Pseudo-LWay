# Pseudo-LWay ☀️🐔

**Editor visual de pseudocódigo educativo con temática de sol naciente y poyos**

Aprende pseudocódigo de forma divertida y estructurada, con niveles progresivos inspirados en el currículum DAW1.

---

## 🌟 Características Principales

### 📚 Sistema de Niveles Curriculares
- **UD01: Fundamentos** (8 niveles) - Variables, tipos de datos, entrada/salida, operadores, condicionales, bucles
- **UD02: Arrays** (6 niveles) - Declarar, recorrer, buscar, sumar, invertir arreglos
- **🧪 Laboratorio Libre** - Zona sandbox sin restricciones para experimentar

### ✅ Validación y Feedback
- Validación automática de estructura de algoritmos
- Bloques obligatorios: `Algoritmo <nombre>` y `FinAlgoritmo`
- Feedback visual de éxito cuando completas correctamente un ejercicio
- Mensajes de error claros y detallados

### 🎯 Navegación Secuencial
- Progresión bloqueada hasta completar cada nivel
- Botones Anterior/Siguiente con estado habilitado/deshabilitado
- Indicador de progreso: X / Y niveles completados
- Starter XML para guiar en niveles iniciales

### 🎨 Identidad Visual Elegante
- Paleta sunrise: gradientes suaves de amarillo dorado a rosa
- Logo sol naciente con rayo multicolor
- Mascota "poyo" (pollito) con actitud divertida
- Diseño oriental-minimalista con tipografía clara

### 🧩 Editor Blockly Potente
- Bloques visuales arrastrables sin sintaxis complicada
- Categorías: Programa, Variables, Entrada/Salida, Control, Valores, Operadores
- Nomenclatura Java (int, double, boolean, String, char)
- Generación de pseudocódigo PSeInt válido

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

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

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

## 🛠️ Tecnologías

- **React 19.2.0** + **TypeScript 5.9.3**
- **Vite 7.2.5** - Tooling rápido
- **Blockly 12.3.1** - Editor visual de bloques
- **IndexedDB** (vía idb 8.0.3) - Persistencia local planificada

---

## 🎯 Bloques Disponibles

### 🏁 Programa
- **Algoritmo** - Inicio con nombre del algoritmo
- **FinAlgoritmo** - Cierre del algoritmo

### 📦 Variables
- **Definir** - Declaración con tipo (int, double, boolean, String, char)
- **Asignar** - Asignación con flecha <-
- **Variable** - Referencia a variable declarada

### 💬 Entrada/Salida
- **Leer** - Lee un valor y lo guarda en una variable
- **Escribir** - Muestra un mensaje o valor en pantalla

### 🔀 Control de Flujo
- **Si-Entonces-Sino** - Decisión condicional
- **Mientras** - Bucle con condición previa
- **Para** - Bucle con contador y paso

### 🔢 Valores y Operadores
- **Literales**: Número, Texto, Booleano
- **Aritméticos**: + (suma), - (resta), * (multiplicación), / (división), % (módulo)
- **Relacionales**: = (igual), != (distinto), < (menor), <= (menor o igual), > (mayor), >= (mayor o igual)
- **Lógicos**: Y (AND), O (OR), NO (NOT)

---

## 📋 Roadmap

### ✅ Completado
- [x] Editor Blockly funcional con bloques básicos
- [x] Validación de estructura Algoritmo/FinAlgoritmo
- [x] Generación de pseudocódigo PSeInt
- [x] Sistema de niveles progresivos con UD01 y UD02
- [x] Navegación secuencial con bloqueo hasta completar nivel
- [x] Feedback visual de éxito en ejercicios
- [x] Starter XML para guiar primeros niveles
- [x] Tema visual sunrise con mascota poyo

### 🚧 En Progreso
- [ ] Guardar progreso del usuario en localStorage
- [ ] Más ejercicios de arrays (matrices 2D, ordenamiento)
- [ ] Funciones y procedimientos (parámetros, retorno)
- [ ] Modo oscuro opcional

### 🔮 Futuro
- [ ] Ejecución paso a paso (debugger visual)
- [ ] Exportar algoritmo como imagen
- [ ] Compartir soluciones con URL única
- [ ] Modo competitivo con cronómetro

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama: `git checkout -b feature/nueva-caracteristica`
3. Commit tus cambios: `git commit -m 'feat: añadir nueva característica'`
4. Push a la rama: `git push origin feature/nueva-caracteristica`
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Proyecto educativo DAW1 - Pseudo-LWay**

Aprende jugando bajo el sol naciente ☀️🐔

---

## 🙏 Agradecimientos

- **PSeInt** por la inspiración en sintaxis y estructura
- **Blockly** (Google) por el potente framework de bloques visuales
- **Comunidad DAW** por feedback y apoyo constante

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
│   ├── App.css          # Estilos globales con tema sunrise
│   └── LevelsSidebar.tsx # Navegación de niveles
├── assets/              # Logos y mascota (sunrise_lightning.svg, poyo.svg)
└── main.tsx            # Punto de entrada
```
```
