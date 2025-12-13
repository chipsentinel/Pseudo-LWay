import { useState, useCallback, useMemo, useEffect } from 'react';
import * as Blockly from 'blockly';
import { BlocklyEditor } from '../features/editor';
import { LevelsSidebar } from './LevelsSidebar';
import { Level } from '../features/levels/levels';
import { UD01_LEVELS } from '../features/levels/ud01';
import { BlocklyToASTConverter } from '../features/editor/blocklyConverter';
import { Validator, PseudocodeGenerator, ValidationError } from '../core';
import './App.css';

function App() {
  const [pseudocode, setPseudocode] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const [workspace, setWorkspace] = useState<Blockly.Workspace | null>(null);
  const allLevels = useMemo(() => [...UD01_LEVELS], []);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(() => {
    const saved = localStorage.getItem('pseudo-lway-current-level');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [completedLevels, setCompletedLevels] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('pseudo-lway-completed');
    return saved ? JSON.parse(saved) : {};
  });
  const [successMessage, setSuccessMessage] = useState<string>('');
  
  const selectedLevel = allLevels[currentLevelIndex];

  // Guardar progreso en localStorage
  useEffect(() => {
    localStorage.setItem('pseudo-lway-current-level', currentLevelIndex.toString());
  }, [currentLevelIndex]);

  useEffect(() => {
    localStorage.setItem('pseudo-lway-completed', JSON.stringify(completedLevels));
  }, [completedLevels]);

  const handleWorkspaceChange = useCallback((ws: Blockly.Workspace) => {
    setWorkspace(ws);
  }, []);

  const handleGenerate = () => {
    if (!workspace) {
      setErrors(['No hay bloques en el workspace']);
      return;
    }

    try {
      // Convertir Blockly a AST
      const converter = new BlocklyToASTConverter();
      const program = converter.convertWorkspace(workspace, 'MiAlgoritmo');

      // Validar el programa
      const validator = new Validator();
      const validationResult = validator.validate(program);

      if (!validationResult.valid) {
        setErrors(validationResult.errors.map((e: ValidationError) => e.message));
        setPseudocode('');
        return;
      }

      // Generar pseudocódigo
      const generator = new PseudocodeGenerator();
      const code = generator.generate(program);

      setPseudocode(code);
      setErrors([]);

      // Validar ejercicio si hay salida esperada
      if (selectedLevel && selectedLevel.exercise?.expected) {
        const normalizedCode = code.replace(/\s+/g, ' ').trim().toLowerCase();
        const normalizedExpected = selectedLevel.exercise.expected.replace(/\s+/g, ' ').trim().toLowerCase();
        
        if (normalizedCode.includes(normalizedExpected) || normalizedExpected.includes(normalizedCode)) {
          setSuccessMessage(`¡Excelente! 🐔✨ Has completado el ejercicio correctamente. Marca como completado para continuar.`);
        } else {
          setSuccessMessage('');
        }
      } else {
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error al generar pseudocódigo:', error);
      setErrors(['Error al generar el pseudocódigo. Revisa los bloques.']);
      setPseudocode('');
    }
  };

  const handleClear = () => {
    if (workspace) {
      workspace.clear();
    }
    setPseudocode('');
    setErrors([]);
    setSuccessMessage('');
  };

  const handleSelectLevel = (level: Level) => {
    const index = allLevels.findIndex(l => l.id === level.id);
    if (index !== -1) setCurrentLevelIndex(index);
    
    // Limpiar mensajes de validación
    setSuccessMessage('');
    setErrors([]);
    setPseudocode('');
    
    // Cargar starter XML si el nivel lo tiene
    if (workspace && level.starterXml) {
      workspace.clear();
      try {
        const xml = Blockly.utils.xml.textToDom(level.starterXml);
        Blockly.Xml.domToWorkspace(xml, workspace);
      } catch (error) {
        console.error('Error al cargar starter XML:', error);
      }
    }
  };

  const handleMarkCompleted = () => {
    if (selectedLevel) {
      setCompletedLevels(prev => ({ ...prev, [selectedLevel.id]: true }));
    }
  };

  const handlePreviousLevel = () => {
    if (currentLevelIndex > 0) {
      setCurrentLevelIndex(currentLevelIndex - 1);
    }
  };

  const handleNextLevel = () => {
    // Solo permitir avanzar si el nivel actual está completado
    if (completedLevels[selectedLevel.id] && currentLevelIndex < allLevels.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
    }
  };

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

  const canGoNext = completedLevels[selectedLevel.id] && currentLevelIndex < allLevels.length - 1;
  const canGoPrevious = currentLevelIndex > 0;

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <img src="/src/assets/sunrise_lightning.svg" alt="Logo" className="brand-logo" />
          <h1>Pseudo-LWay</h1>
        </div>
        <button className="btn btn-reset" onClick={handleResetProgress} title="Reiniciar progreso">
          🔄
        </button>
      </header>

      <div className="app-content">
        <LevelsSidebar 
          onSelectLevel={handleSelectLevel} 
          completedLevels={completedLevels}
          currentLevelId={selectedLevel?.id}
        />
        <div className="levels-panel">
          {selectedLevel && (
            <div className="level-detail">
              <div className="level-header">
                <h2>Nivel {currentLevelIndex + 1} — {selectedLevel.title}</h2>
                {completedLevels[selectedLevel.id] && <span className="badge-completed">✅ Completado</span>}
              </div>
              
              <div className="level-section">
                <h3>📚 Qué vas a aprender</h3>
                <p>{selectedLevel.description}</p>
              </div>

              <div className="level-section">
                <h3>💡 Consejos</h3>
                <ul>
                  {selectedLevel.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              {selectedLevel.exercise && (
                <div className="level-section exercise-box">
                  <h3>🎯 Ejercicio del Nivel</h3>
                  <p className="exercise-goal">{selectedLevel.exercise.goal}</p>
                  {selectedLevel.exercise.expected && (
                    <details className="expected-output">
                      <summary>Ver salida esperada</summary>
                      <pre>{selectedLevel.exercise.expected}</pre>
                    </details>
                  )}
                </div>
              )}

              <div className="level-navigation">
                <button 
                  className="btn btn-outline" 
                  onClick={handlePreviousLevel}
                  disabled={!canGoPrevious}
                >
                  ← Anterior
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={handleMarkCompleted}
                  disabled={completedLevels[selectedLevel.id]}
                >
                  {completedLevels[selectedLevel.id] ? '✓ Completado' : 'Marcar Completado'}
                </button>
                <button 
                  className="btn btn-outline" 
                  onClick={handleNextLevel}
                  disabled={!canGoNext}
                  title={!completedLevels[selectedLevel.id] ? 'Completa este nivel primero' : ''}
                >
                  Siguiente →
                </button>
              </div>

              <div className="progress-indicator">
                Progreso: {Object.keys(completedLevels).length} / {allLevels.length} niveles
              </div>
            </div>
          )}
        </div>
        <div className="editor-panel">
          <div className="panel-header">
            <h2>Editor de Bloques</h2>
            <div className="button-group">
              <button className="btn btn-primary" onClick={handleGenerate}>
                🚀 Generar Pseudocódigo
              </button>
              <button className="btn btn-secondary" onClick={handleClear}>
                🗑️ Limpiar
              </button>
            </div>
          </div>
          <div className="editor-container">
            <BlocklyEditor onWorkspaceChange={handleWorkspaceChange} />
          </div>
        </div>

        <div className="output-panel">
          <div className="panel-header">
            <h2>Pseudocódigo Generado</h2>
          </div>

          {successMessage && (
            <div className="success-box">
              <h3>{successMessage}</h3>
            </div>
          )}

          {errors.length > 0 && (
            <div className="error-box">
              <h3>❌ Errores de Validación:</h3>
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {pseudocode && (
            <div className="code-box">
              <pre>{pseudocode}</pre>
            </div>
          )}

          {!pseudocode && errors.length === 0 && (
            <div className="placeholder">
              <p>
                👈 Arrastra bloques desde la barra lateral para construir tu algoritmo.
              </p>
              <p>Luego presiona "Generar Pseudocódigo" para ver el resultado.</p>
            </div>
          )}
        </div>
      </div>


    </div>
  );
}

export default App;
