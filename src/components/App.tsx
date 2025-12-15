// Componente principal de la aplicación Pseudo-LWay.
// Permite aprender programación con pseudocódigo visual usando bloques (Blockly).
// Incluye sistema de niveles progresivos, validación automática, generación de pseudocódigo y persistencia de progreso.
//
// Estructura general:
// - Panel izquierdo: información y navegación de niveles
// - Panel central: editor visual de bloques
// - Panel derecho: teoría, términos y feedback

// Importa hooks de React, Blockly y módulos del editor y niveles.
import { useState, useCallback, useMemo, useEffect } from 'react';
import * as Blockly from 'blockly';
import { BlocklyEditor } from '../features/editor';
import { UD01_LEVELS } from '../features/levels/ud01';
import { BlocklyToASTConverter } from '../features/editor/blocklyConverter';
import { Validator, PseudocodeGenerator, ValidationError } from '../core';
import './App.css';


function App() {
  // --- ESTADOS PRINCIPALES ---
  // pseudocode: pseudocódigo generado a partir de los bloques.
  const [pseudocode, setPseudocode] = useState<string>('');
  // errors: lista de errores de validación del algoritmo.
  const [errors, setErrors] = useState<string[]>([]);
  // workspace: referencia al workspace de Blockly.
  const [workspace, setWorkspace] = useState<Blockly.Workspace | null>(null);
  // allLevels: lista de niveles (se copia para evitar mutaciones accidentales).
  const allLevels = useMemo(() => [...UD01_LEVELS], []);
  // currentLevelIndex: índice del nivel actual (persistido en localStorage).
  const [currentLevelIndex, setCurrentLevelIndex] = useState(() => {
    const saved = localStorage.getItem('pseudo-lway-current-level');
    return saved ? parseInt(saved, 10) : 0;
  });
  // completedLevels: objeto con los niveles completados (persistido en localStorage).
  const [completedLevels, setCompletedLevels] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('pseudo-lway-completed');
    return saved ? JSON.parse(saved) : {};
  });
  // successMessage: mensaje de éxito al completar un ejercicio.
  const [successMessage, setSuccessMessage] = useState<string>('');

  // selectedLevel: nivel actualmente seleccionado.
  const selectedLevel = allLevels[currentLevelIndex];



  // --- EFECTOS DE PERSISTENCIA ---
  // Guarda el nivel actual en localStorage al cambiar.
  useEffect(() => {
    localStorage.setItem('pseudo-lway-current-level', currentLevelIndex.toString());
  }, [currentLevelIndex]);

  // Guarda los niveles completados en localStorage al cambiar.
  useEffect(() => {
    localStorage.setItem('pseudo-lway-completed', JSON.stringify(completedLevels));
  }, [completedLevels]);


  /**
   * Callback que se ejecuta cuando el workspace de Blockly cambia.
   * Permite actualizar el pseudocódigo, validar el algoritmo y actualizar el estado.
   * Permite acceder a los bloques actuales para validación/generación.
   */
  const handleWorkspaceChange = useCallback((ws: Blockly.Workspace) => {
    setWorkspace(ws);
  }, []);


  /**
   * Genera el pseudocódigo a partir de los bloques actuales.
   * 1. Convierte los bloques a AST (estructura de árbol)
   * 2. Valida la estructura y reglas del nivel
   * 3. Si es válido, genera el pseudocódigo y lo muestra
   * 4. Si hay errores, los muestra en pantalla
   * 5. Si el código coincide con el esperado, muestra mensaje de éxito
   */
  const handleGenerate = () => {
    if (!workspace) {
      setErrors(['No hay bloques en el workspace']);
      return;
    }

    try {
      // 1. Convertir Blockly a AST (Abstract Syntax Tree)
      const converter = new BlocklyToASTConverter();
      const program = converter.convertWorkspace(workspace, 'MiAlgoritmo');

      // 2. Validar el programa (estructura, variables, sintaxis)
      const validator = new Validator();
      const validationResult = validator.validate(program);

      if (!validationResult.valid) {
        setErrors(validationResult.errors.map((e: ValidationError) => e.message));
        setPseudocode('');
        return;
      }

      // 3. Generar pseudocódigo si es válido
      const generator = new PseudocodeGenerator();
      const code = generator.generate(program);

      setPseudocode(code);
      setErrors([]);

      // 4. Validar si el código generado cumple el objetivo del nivel
      if (selectedLevel && selectedLevel.exercise?.expected) {
        // Normaliza espacios y mayúsculas para comparar
        const normalizedCode = code.replace(/\s+/g, ' ').trim().toLowerCase();
        const normalizedExpected = selectedLevel.exercise.expected.replace(/\s+/g, ' ').trim().toLowerCase();
        
        if (normalizedCode.includes(normalizedExpected) || normalizedExpected.includes(normalizedCode)) {
          setSuccessMessage(`¡Excelente! ✨ Has completado el ejercicio correctamente. Marca como completado para continuar.`);
        } else {
          setSuccessMessage('');
        }
      } else {
        setSuccessMessage('');
      }
    } catch (error) {
      // 5. Captura errores inesperados (por ejemplo, bloques mal conectados)
      console.error('Error al generar pseudocódigo:', error);
      setErrors(['Error al generar el pseudocódigo. Revisa los bloques.']);
      setPseudocode('');
    }
  };


  /**
   * Limpia el workspace de bloques y borra mensajes/resultados.
   * Útil para reiniciar el ejercicio sin cambiar de nivel.
   */
  const handleClear = () => {
    if (workspace) {
      workspace.clear();
    }
    setPseudocode('');
    setErrors([]);
    setSuccessMessage('');
  };


  /**
   * Efecto: al cambiar de nivel, carga el XML inicial (starterXml) si existe.
   * También reinicia mensajes y pseudocódigo para evitar confusión.
   */
  useEffect(() => {
    if (workspace && selectedLevel?.starterXml) {
      workspace.clear();
      try {
        const xml = Blockly.utils.xml.textToDom(selectedLevel.starterXml);
        Blockly.Xml.domToWorkspace(xml, workspace);
      } catch (error) {
        console.error('Error al cargar starter XML:', error);
      }
    }
    setSuccessMessage('');
    setErrors([]);
    setPseudocode('');
  }, [workspace, selectedLevel]);


  /**
   * Marca el nivel actual como completado (para navegación y progreso).
   */
  const handleMarkCompleted = () => {
    if (selectedLevel) {
      setCompletedLevels(prev => ({ ...prev, [selectedLevel.id]: true }));
    }
  };


  /**
   * Navega al nivel anterior (si existe).
   */
  const handlePreviousLevel = () => {
    if (currentLevelIndex > 0) {
      setCurrentLevelIndex(currentLevelIndex - 1);
    }
  };


  /**
   * Navega al siguiente nivel (solo si el actual está completado).
   */
  const handleNextLevel = () => {
    if (completedLevels[selectedLevel.id] && currentLevelIndex < allLevels.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
    }
  };


  /**
   * Reinicia todo el progreso del usuario (niveles y pseudocódigo).
   * Pide confirmación antes de borrar datos.
   */
  const handleResetProgress = () => {
    if (window.confirm('¿Seguro que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.')) {
      localStorage.removeItem('pseudo-lway-current-level');
      localStorage.removeItem('pseudo-lway-completed');
      setCurrentLevelIndex(0);
      setCompletedLevels({});
      setPseudocode('');
      setErrors([]);
      setSuccessMessage('');
    }
  };


  // --- LÓGICA DE NAVEGACIÓN ---
  // Solo se puede avanzar si el nivel está completado y no es el último
  const canGoNext = completedLevels[selectedLevel.id] && currentLevelIndex < allLevels.length - 1;
  // Solo se puede retroceder si no es el primero
  const canGoPrevious = currentLevelIndex > 0;

  // --- RENDER PRINCIPAL ---
  // Estructura: header (progreso), panel de nivel, editor de bloques, panel de teoría/feedback
  return (
    <div className="app">
      {/* Header: logo, estado, reset */}
      <header className="app-header">
        <div className="brand">
          <img src="/public/Pseudo-LWAY-logo.svg" alt="Logo" className="brand-logo" />
          <h1>Pseudo-LWay</h1>
        </div>
        <div className="header-status" role="status">
          {successMessage
            ? '✔ Ejercicio correcto'
            : errors.length > 0
              ? `✖ Corrige los bloques (${errors.length})`
              : pseudocode
                ? 'Generado, pendiente validación'
                : <span style={{color: '#00d9ff'}}>⚡ Listo para generar pseudocódigo</span>}
        </div>
        {/* Botón para reiniciar todo el progreso */}
        <button className="btn btn-reset" onClick={handleResetProgress} title="Reiniciar progreso">
          ⟳
        </button>
      </header>

      <div className="app-content">
        {/* Panel izquierdo: información y navegación de nivel */}
        <div className="level-panel">
          {selectedLevel && (
            <div className="level-detail">
              <div className="level-header">
                <h2>N{currentLevelIndex + 1} — {selectedLevel.title}</h2>
                {completedLevels[selectedLevel.id] && <span className="badge-completed">✅ Completado</span>}
              </div>
              {/* Descripción del nivel */}
              <div className="level-section">
                <h3>📚 Qué vas a aprender</h3>
                <p>{selectedLevel.description}</p>
              </div>
              {/* Consejos clave */}
              <div className="level-section">
                <h3>💡 Consejos</h3>
                <ul>
                  {selectedLevel.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
              {/* Ejercicio del nivel */}
              {selectedLevel.exercise && (
                <div className="level-section exercise-box">
                  <h3>🎯 Ejercicio del Nivel</h3>
                  <p className="exercise-goal">{selectedLevel.exercise.goal}</p>
                  {/* Mostrar siempre la pestaña de salida esperada, aunque expected sea vacío */}
                  <details className="expected-output" open={!!selectedLevel.exercise.expected}>
                    <summary>Ver salida esperada</summary>
                    <pre>{selectedLevel.exercise.expected ? selectedLevel.exercise.expected : 'No se ha definido una salida esperada para este nivel.'}</pre>
                  </details>
                </div>
              )}
              {/* Navegación entre niveles */}
              <div className="level-navigation">
                <button 
                  className="btn btn-outline" 
                  onClick={handlePreviousLevel}
                  disabled={!canGoPrevious}
                >
                  ←
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={handleMarkCompleted}
                  disabled={completedLevels[selectedLevel.id]}
                >
                  {completedLevels[selectedLevel.id] ? '✓ Completado' : 'Marcar'}
                </button>
                <button 
                  className="btn btn-outline" 
                  onClick={handleNextLevel}
                  disabled={!canGoNext}
                  title={!completedLevels[selectedLevel.id] ? 'Completa este nivel primero' : ''}
                >
                  →
                </button>
              </div>
              {/* Indicador de progreso */}
              <div className="progress-indicator">
                Progreso: {Object.keys(completedLevels).length} / {allLevels.length}
              </div>
            </div>
          )}
        </div>
        {/* Panel central: editor visual de bloques */}
        <div className="editor-panel">
          <div className="panel-header">
            <h2>Editor de Bloques</h2>
            <div className="button-group">
              <button className="btn btn-primary" onClick={handleGenerate}>
                🧠 Generar Pseudocódigo
              </button>
              <button className="btn btn-morado" onClick={handleClear}>
                🧹 Limpiar
              </button>
            </div>
          </div>
          <div className="editor-container">
            {/* Componente Blockly: editor visual */}
            <BlocklyEditor onWorkspaceChange={handleWorkspaceChange} />
          </div>
        </div>
        {/* Panel derecho: teoría, términos y feedback */}
        <div className="output-panel">
          <div className="panel-header">
            <h2>Teoría y Términos</h2>
          </div>
          {/* Mensaje de éxito si el ejercicio está bien */}
          {successMessage && (
            <div className="info-box success">
              <h3>{successMessage}</h3>
            </div>
          )}
          {/* Resumen y conceptos clave del nivel */}
          {selectedLevel && (
            <div className="theory-box">
              <h3>Resumen del nivel</h3>
              <p>{selectedLevel.description}</p>
              {selectedLevel.tips.length > 0 && (
                <div className="theory-section">
                  <h4>Conceptos clave</h4>
                  <ul>
                    {selectedLevel.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
              {/*
                No mostrar la salida esperada en teoría/terminos.
                Si se quiere mostrar un ejemplo, debe agregarse un campo específico (ejemplo) en el nivel.
              */}
              <div className="note-box">
                Usa los bloques para traducir estos conceptos a pseudocódigo. Genera para validar y ver si el ejercicio está correcto.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
