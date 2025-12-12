# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto sigue [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

## [Unreleased] - Roadmap Futuro

### 🚀 Por Implementar
- [ ] Persistencia local con IndexedDB
- [ ] Exportar a Java
- [ ] Simulador paso a paso
- [ ] Arreglos y funciones
- [ ] PWA con service worker
- [ ] Modo oscuro
- [ ] Compartir proyectos (export/import JSON)
- [ ] Tests unitarios e integración
- [ ] Internacionalización (i18n)
- [ ] Tutorial interactivo
- [ ] Ejemplos precargados
- [ ] Depurador visual
- [ ] Análisis de complejidad

### 🐛 Bugs Conocidos
Ninguno reportado en esta versión inicial.

### 📝 Notas de Desarrollo
- Proyecto creado como herramienta educativa para DAW 1
- Enfoque en simplicidad y usabilidad
- Arquitectura modular para fácil extensión
- Sin dependencias de backend (100% frontend)

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
