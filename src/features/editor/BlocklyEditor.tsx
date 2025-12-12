import { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import './blockDefinitions';
import { INITIAL_WORKSPACE_XML } from '../../config';

interface BlocklyEditorProps {
  onWorkspaceChange?: (workspace: Blockly.Workspace) => void;
}

/**
 * Componente editor visual con Blockly
 */
export const BlocklyEditor = ({ onWorkspaceChange }: BlocklyEditorProps) => {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);

  useEffect(() => {
    if (!blocklyDiv.current) return;

    // Configuración del toolbox (caja de herramientas)
    const toolbox = {
      kind: 'categoryToolbox',
      contents: [
        {
          kind: 'category',
          name: 'Variables',
          colour: '160',
          contents: [
            { kind: 'block', type: 'pseudo_define' },
            { kind: 'block', type: 'pseudo_assign' },
            { kind: 'block', type: 'pseudo_variable' },
          ],
        },
        {
          kind: 'category',
          name: 'Entrada/Salida',
          colour: '120',
          contents: [
            { kind: 'block', type: 'pseudo_read' },
            { kind: 'block', type: 'pseudo_write' },
          ],
        },
        {
          kind: 'category',
          name: 'Control',
          colour: '210',
          contents: [
            { kind: 'block', type: 'pseudo_if' },
            { kind: 'block', type: 'pseudo_while' },
            { kind: 'block', type: 'pseudo_for' },
          ],
        },
        {
          kind: 'category',
          name: 'Valores',
          colour: '230',
          contents: [
            { kind: 'block', type: 'pseudo_number' },
            { kind: 'block', type: 'pseudo_text' },
            { kind: 'block', type: 'pseudo_boolean' },
          ],
        },
        {
          kind: 'category',
          name: 'Operadores',
          colour: '230',
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
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
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
