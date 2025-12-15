# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-12-13

### ✨ Características Nuevas

#### 🎯 Sistema de Niveles Curriculares
- **UD01: Fundamentos** (8 niveles completos con ejercicios)
  1. Introducción al pseudocódigo (Algoritmo/FinAlgoritmo, Escribir)
  2. Tipos de datos (int, double, boolean, String, char)
  3. Entrada y salida (Leer, Escribir, interacción)
  4. Asignación y operadores (+, -, *, /, %)
  5. Condicionales (Si/Entonces/Sino)
  6. Bucles Mientras (condición previa)
  7. Bucles Para (contador definido)
  8. Caso integrador (estadísticas con suma, promedio, máx, mín)

- **🧪 Laboratorio Sandbox**
  - Zona libre para experimentación sin restricciones
  - Sin objetivos ni validación

#### 🔄 Navegación Secuencial Inteligente
- Progresión bloqueada hasta completar nivel actual
- Botones Anterior/Siguiente con estados habilitado/deshabilitado
- Indicador de progreso: "X / Y niveles completados"
- Checkmarks (✓) en niveles completados
- Sidebar organizado por secciones curriculares

#### 💾 Persistencia Automática
- Guardado automático en localStorage
- Restauración de progreso al recargar aplicación
- Botón "Reset" para reiniciar progreso completo
- Confirmación antes de borrar datos

#### ✅ Validación de Ejercicios
- Comparación automática con salida esperada
- Mensaje de éxito animado con emoji poyo 🐔✨
- Feedback visual inmediato
- Limpieza de mensajes al cambiar de nivel

#### 📦 Starter XML por Nivel
- Bloques iniciales precargados para niveles 1-8 de UD01
- Variables predefinidas según ejercicio
- Carga automática al seleccionar nivel
- Guía clara para estudiantes

### 🎨 Rediseño Visual "Sunrise Oriental"

#### Identidad Visual
- Logo sol naciente con rayo multicolor
- Mascota "poyo" (pollito) divertida
- Paleta sunrise: gradientes suaves #fff8e1 → #f48fb1
- Tema elegante inspiración oriental-minimalista

#### Tipografía y Espaciado
- Headers: h2 1.6rem/700, h3 1.1rem/600
- Spacing consistente: 2rem cards, 1.5rem sections
- Line-height 1.7 para legibilidad

#### Animaciones
- Success pulse para mensajes de éxito
- Hover effects en botones y niveles
- Transiciones suaves (0.2s - 0.3s)
- Transform translateY en botones

### 🔧 Mejoras Técnicas

#### Bloques Algoritmo
- `pseudo_start`: bloque Algoritmo con campo nombre
- `pseudo_end`: bloque FinAlgoritmo
- Validación de bloques emparejados

#### Nomenclatura Java
- Mostrar tipos como: int, double, boolean, String, char
- Mantener compatibilidad interna con PSeInt
- Mapeo automático en generador

#### Arquitectura
- useEffect para persistencia automática
- useMemo para optimización de niveles
- Estado inicializado desde localStorage

### 📝 Documentación

#### README Completo
- Estructura detallada de niveles
- Características principales con emojis
- Roadmap con tareas completadas y futuras
- Estructura del proyecto
- Guía de instalación y uso

#### Código Organizado
- features/levels/ con ud01.ts, ud02.ts, sandbox.ts
- Separación clara de responsabilidades
- Comentarios descriptivos

### 🐛 Correcciones
- Limpieza de código duplicado en LevelsSidebar.tsx
- Fix header layout con flexbox space-between
- Corrección de estilos CSS para secciones curriculares

### 📊 Estadísticas
- **14 commits** en rama dev durante sesión de mejoras
- ~1500 líneas de código añadidas
- 3 archivos nuevos (ud02.ts, sandbox.ts, btn-reset styles)
- 10 archivos modificados

### 🚀 Commits Principales
```
4b58ad1 - feat(levels): completar starter XML para todos los niveles UD01
25a1b78 - feat(persistence): guardar progreso automáticamente en localStorage
0e888a8 - docs: actualizar README con características completas
faae738 - feat(validation): validación básica de ejercicios con feedback visual
1c3a24d - feat(curriculum): expandir contenido UD01, añadir UD02 Arrays y nivel Sandbox
fbe99ac - style(ui): tema sunrise oriental elegante con tipografía y spacing mejorados
9022dc0 - feat(levels): navegación secuencial con bloqueo hasta completar nivel
```

---

## [0.1.0] - 2024-12-12

### ✨ Añadido (MVP)

#### Core
- Sistema de tipos completo (AST) para pseudocódigo
- Validador de algoritmos con verificación de variables
- Generador de pseudocódigo estilo PSeInt con indentación

#### Editor
- Integración con Blockly para editor visual
- 15 tipos de bloques personalizados:
  - **Variables**: Definir, Asignar, Variable
  - **E/S**: Leer, Escribir
  - **Control**: Si/Sino, Mientras, Para
  - **Valores**: Número, Texto, Booleano
  - **Operadores**: Aritméticos, Relacionales, Lógicos, NO
- Conversor de bloques Blockly a AST interno
- Workspace inicial con ejemplo de suma

#### Interfaz
- Layout responsive de dos paneles
- Panel de editor visual con Blockly
- Panel de visualización de pseudocódigo
- Mensajes de error de validación
- Botones de acción (Generar, Limpiar)
- Diseño moderno con gradientes y sombras

#### Documentación
- README completo con características e instalación
- Documentación técnica detallada (TECHNICAL.md)
- Ejemplos de uso del core
- Guía de extensibilidad

### 🎨 Estilo
- Paleta de colores: púrpura/azul (#667eea, #764ba2)
- Tipografía: Segoe UI
- Responsive design para tablets y móviles

### 📦 Dependencias
- React 19.2.0
- TypeScript 5.9.3
- Vite 7.2.5 (Rolldown)
- Blockly (última versión)
- idb (para IndexedDB, preparado para futuro)

### 🔧 Configuración
- TypeScript estricto
- ESLint configurado
- Vite con hot reload

## Referencias y Pull Requests

- Para cambios mayores, consulta los issues y pull requests asociados en el repositorio.
- Ejemplo: [#12](https://github.com/tu-usuario/Pseudo-LWay/issues/12) - Mejora de validación de ejercicios
- Ejemplo: [PR #34](https://github.com/tu-usuario/Pseudo-LWay/pull/34) - Refactorización de la arquitectura core

## Migraciones y Cambios Incompatibles

- Actualmente no hay migraciones ni breaking changes.
- Si en futuras versiones se requiere intervención manual, se documentará aquí con pasos detallados.

## Cambios Incompatibles (Breaking Changes)

- No se han introducido cambios incompatibles hasta la fecha.
- Si los hubiera, se describirán aquí junto con instrucciones de migración.

---

## Convenciones de Versiones

- **MAJOR** (1.x.x): Cambios incompatibles con versiones anteriores
- **MINOR** (x.1.x): Nueva funcionalidad compatible hacia atrás
- **PATCH** (x.x.1): Correcciones de bugs compatibles

## Categorías de Cambios

- **Añadido**: Nueva funcionalidad
- **Cambiado**: Cambios en funcionalidad existente
- **Obsoleto**: Funcionalidad que será removida
- **Removido**: Funcionalidad eliminada
- **Arreglado**: Corrección de bugs
- **Seguridad**: Vulnerabilidades corregidas
