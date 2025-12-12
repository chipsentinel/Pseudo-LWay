/**
 * Configuraciones iniciales de la aplicación
 */

export const APP_CONFIG = {
  name: 'Pseudo-LWay',
  version: '0.1.0',
  defaultProgramName: 'MiAlgoritmo',
};

/**
 * Workspace inicial de Blockly (XML)
 * Ejemplo: Programa que suma dos números
 */
export const INITIAL_WORKSPACE_XML = `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="pseudo_define" x="20" y="20">
    <field name="VAR_NAME">num1</field>
    <field name="VAR_TYPE">Entero</field>
    <next>
      <block type="pseudo_define">
        <field name="VAR_NAME">num2</field>
        <field name="VAR_TYPE">Entero</field>
        <next>
          <block type="pseudo_define">
            <field name="VAR_NAME">suma</field>
            <field name="VAR_TYPE">Entero</field>
            <next>
              <block type="pseudo_write">
                <value name="VALUE">
                  <block type="pseudo_text">
                    <field name="VALUE">Ingrese el primer número:</field>
                  </block>
                </value>
                <next>
                  <block type="pseudo_read">
                    <field name="VAR_NAME">num1</field>
                    <next>
                      <block type="pseudo_write">
                        <value name="VALUE">
                          <block type="pseudo_text">
                            <field name="VALUE">Ingrese el segundo número:</field>
                          </block>
                        </value>
                        <next>
                          <block type="pseudo_read">
                            <field name="VAR_NAME">num2</field>
                            <next>
                              <block type="pseudo_assign">
                                <field name="VAR_NAME">suma</field>
                                <value name="VALUE">
                                  <block type="pseudo_arithmetic">
                                    <field name="OP">+</field>
                                    <value name="A">
                                      <block type="pseudo_variable">
                                        <field name="VAR_NAME">num1</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <block type="pseudo_variable">
                                        <field name="VAR_NAME">num2</field>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="pseudo_write">
                                    <value name="VALUE">
                                      <block type="pseudo_text">
                                        <field name="VALUE">La suma es:</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="pseudo_write">
                                        <value name="VALUE">
                                          <block type="pseudo_variable">
                                            <field name="VAR_NAME">suma</field>
                                          </block>
                                        </value>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
`.trim();
