import { useState, useCallback } from 'react';
import * as Blockly from 'blockly';
import { BlocklyEditor } from '../features/editor';
import { BlocklyToASTConverter } from '../features/editor/blocklyConverter';
import { Validator, PseudocodeGenerator, ValidationError } from '../core';
import './App.css';

function App() {
  const [pseudocode, setPseudocode] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const [workspace, setWorkspace] = useState<Blockly.Workspace | null>(null);

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
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎓 Pseudo-LWay</h1>
        <p>Editor visual de pseudocódigo estilo PSeInt</p>
      </header>

      <div className="app-content">
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

      <footer className="app-footer">
        <p>Proyecto educativo para estudiantes de DAW 1 - Pseudo-LWay v0.1.0</p>
      </footer>
    </div>
  );
}

export default App;
