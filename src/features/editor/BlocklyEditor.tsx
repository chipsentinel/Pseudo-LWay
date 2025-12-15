
// Importa hooks de React y la librería Blockly.
import { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import './blockDefinitions';
import { INITIAL_WORKSPACE_XML } from '../../config';


// Props del componente BlocklyEditor.
// - onWorkspaceChange: callback al cambiar el workspace.
interface BlocklyEditorProps {
  onWorkspaceChange?: (workspace: Blockly.Workspace) => void;
}

// Tema personalizado para bloques y toolbox con la paleta visual del editor.
// Define colores y estilos para bloques, categorías y componentes de la UI.
const neonTheme = Blockly.Theme.defineTheme('pseudoNeon', {
  name: 'pseudoNeon',
  blockStyles: {
    program: { colourPrimary: '#00d8ff', colourSecondary: '#0ba7c7', colourTertiary: '#0b5c74' },
    variables: { colourPrimary: '#a93cff', colourSecondary: '#8734d1', colourTertiary: '#5c248f' },
    io: { colourPrimary: '#06d6a0', colourSecondary: '#05b485', colourTertiary: '#048764' },
    control: { colourPrimary: '#ffc857', colourSecondary: '#d6a94c', colourTertiary: '#a17f3b' },
    values: { colourPrimary: '#2f7bff', colourSecondary: '#2562cc', colourTertiary: '#1c4c99' },
    operators: { colourPrimary: '#ef476f', colourSecondary: '#c63b5c', colourTertiary: '#942c45' },
  },
  categoryStyles: {
    program_category: { colour: '#00d8ff' },
    variables_category: { colour: '#a93cff' },
    io_category: { colour: '#06d6a0' },
    control_category: { colour: '#ffc857' },
    values_category: { colour: '#2f7bff' },
    operators_category: { colour: '#ef476f' },
  },
  componentStyles: {
    toolboxBackgroundColour: '#0b1228',
    toolboxForegroundColour: '#dbe5ff',
    flyoutBackgroundColour: '#0f1b35',
    flyoutForegroundColour: '#dbe5ff',
    flyoutOpacity: 1,
    scrollbarColour: '#2d3561',
    insertionMarkerColour: '#00d8ff',
    insertionMarkerOpacity: 0.5,
    markerColour: '#00d8ff',
    cursorColour: '#00d8ff',
    selectedGlowColour: '#00d8ff',
  },
  fontStyle: {
    family: 'Segoe UI, Roboto, sans-serif',
    weight: '600',
    size: 12,
  },
});

/**
 * Componente editor visual con Blockly.
 * Inicializa el workspace, aplica el tema y gestiona los cambios de bloques.
 */
export const BlocklyEditor = ({ onWorkspaceChange }: BlocklyEditorProps) => {
  // Referencia al contenedor del editor Blockly.
  const blocklyDiv = useRef<HTMLDivElement>(null);
  // Referencia al workspace de Blockly (SVG principal).
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);

  useEffect(() => {
    if (!blocklyDiv.current) return;

    // Configuración del toolbox (caja de herramientas).
    const toolbox = {
      kind: 'categoryToolbox',
      contents: [
        {
          kind: 'category',
          name: '⚡ Programa',
          categorystyle: 'program_category',
          contents: [
            { kind: 'block', type: 'pseudo_start' },
            { kind: 'block', type: 'pseudo_end' },
          ],
        },
        {
          kind: 'category',
          name: '📦 Variables',
          categorystyle: 'variables_category',
          contents: [
            { kind: 'block', type: 'pseudo_define' },
            { kind: 'block', type: 'pseudo_assign' },
            { kind: 'block', type: 'pseudo_variable' },
          ],
        },
        {
          kind: 'category',
          name: '📥 Entrada / Salida',
          categorystyle: 'io_category',
          contents: [
            { kind: 'block', type: 'pseudo_read' },
            { kind: 'block', type: 'pseudo_write' },
          ],
        },
        {
          kind: 'category',
          name: '🔀 Control',
          categorystyle: 'control_category',
          contents: [
            { kind: 'block', type: 'pseudo_if' },
            { kind: 'block', type: 'pseudo_while' },
            { kind: 'block', type: 'pseudo_for' },
          ],
        },
        {
          kind: 'category',
          name: '🔢 Valores',
          categorystyle: 'values_category',
          contents: [
            { kind: 'block', type: 'pseudo_number' },
            { kind: 'block', type: 'pseudo_text' },
            { kind: 'block', type: 'pseudo_boolean' },
          ],
        },
        {
          kind: 'category',
          name: '⚙️ Operadores',
          categorystyle: 'operators_category',
          contents: [
            { kind: 'block', type: 'pseudo_arithmetic' },
            { kind: 'block', type: 'pseudo_comparison' },
            { kind: 'block', type: 'pseudo_logic' },
            { kind: 'block', type: 'pseudo_not' },
          ],
        },
      ],
    };

    // Crear workspace
    const workspace = Blockly.inject(blocklyDiv.current, {
      toolbox,
      scrollbars: true,
      trashcan: true,
      renderer: 'zelos',
      theme: neonTheme,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      grid: {
        spacing: 24,
        length: 3,
        colour: '#14203a',
        snap: true,
      },
    });

    workspaceRef.current = workspace;

    // Cargar workspace inicial
    try {
      Blockly.Xml.domToWorkspace(
        Blockly.utils.xml.textToDom(INITIAL_WORKSPACE_XML),
        workspace
      );
    } catch (error) {
      console.warn('No se pudo cargar el workspace inicial:', error);
    }

    // Listener para cambios en el workspace
    const changeListener = () => {
      if (onWorkspaceChange) {
        onWorkspaceChange(workspace);
      }
    };

    workspace.addChangeListener(changeListener);

    // Cleanup
    return () => {
      workspace.dispose();
      workspaceRef.current = null;
    };
  }, [onWorkspaceChange]);

  return (
    <div
      ref={blocklyDiv}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};
