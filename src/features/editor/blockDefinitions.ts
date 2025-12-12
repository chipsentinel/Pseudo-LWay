import * as Blockly from 'blockly';
import { DataType } from '../../core';

/**
 * Definiciones de bloques personalizados para Pseudo-LWay
 */

// Bloque: Inicio de Algoritmo
Blockly.Blocks['pseudo_start'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Algoritmo')
      .appendField(new Blockly.FieldTextInput('MiAlgoritmo'), 'ALGO_NAME');
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('Inicio del algoritmo con su nombre');
    this.setHelpUrl('');
  },
};

// Bloque: Fin de Algoritmo
Blockly.Blocks['pseudo_end'] = {
  init: function () {
    this.appendDummyInput().appendField('FinAlgoritmo');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setColour(300);
    this.setTooltip('Fin del algoritmo');
    this.setHelpUrl('');
  },
};

// Bloque: Definir variable
Blockly.Blocks['pseudo_define'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Definir')
      .appendField(new Blockly.FieldTextInput('variable'), 'VAR_NAME')
      .appendField('Como')
      .appendField(
        new Blockly.FieldDropdown([
          ['int', DataType.ENTERO],
          ['double', DataType.REAL],
          ['boolean', DataType.LOGICO],
          ['String', DataType.CADENA],
          ['char', DataType.CARACTER],
        ]),
        'VAR_TYPE'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Define una variable con su tipo');
    this.setHelpUrl('');
  },
};

// Bloque: Asignación
Blockly.Blocks['pseudo_assign'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck(null)
      .appendField(new Blockly.FieldTextInput('variable'), 'VAR_NAME')
      .appendField('<-');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Asigna un valor a una variable');
    this.setHelpUrl('');
  },
};

// Bloque: Leer
Blockly.Blocks['pseudo_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Leer')
      .appendField(new Blockly.FieldTextInput('variable'), 'VAR_NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Lee un valor desde la entrada');
    this.setHelpUrl('');
  },
};

// Bloque: Escribir
Blockly.Blocks['pseudo_write'] = {
  init: function () {
    this.appendValueInput('VALUE').setCheck(null).appendField('Escribir');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Escribe un valor en la salida');
    this.setHelpUrl('');
  },
};

// Bloque: Si-Entonces-Sino
Blockly.Blocks['pseudo_if'] = {
  init: function () {
    this.appendValueInput('CONDITION')
      .setCheck('Boolean')
      .appendField('Si');
    this.appendStatementInput('THEN').setCheck(null).appendField('Entonces');
    this.appendStatementInput('ELSE').setCheck(null).appendField('Sino');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('Estructura condicional');
    this.setHelpUrl('');
  },
};

// Bloque: Mientras
Blockly.Blocks['pseudo_while'] = {
  init: function () {
    this.appendValueInput('CONDITION')
      .setCheck('Boolean')
      .appendField('Mientras');
    this.appendStatementInput('DO').setCheck(null).appendField('Hacer');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Bucle mientras');
    this.setHelpUrl('');
  },
};

// Bloque: Para
Blockly.Blocks['pseudo_for'] = {
  init: function () {
    this.appendValueInput('START')
      .setCheck('Number')
      .appendField('Para')
      .appendField(new Blockly.FieldTextInput('i'), 'COUNTER')
      .appendField('<-');
    this.appendValueInput('END')
      .setCheck('Number')
      .appendField('Hasta');
    this.appendValueInput('STEP')
      .setCheck('Number')
      .appendField('Con Paso');
    this.appendStatementInput('DO').setCheck(null).appendField('Hacer');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Bucle Para');
    this.setHelpUrl('');
  },
};

// Bloque: Literal número
Blockly.Blocks['pseudo_number'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldNumber(0), 'VALUE');
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Número literal');
    this.setHelpUrl('');
  },
};

// Bloque: Literal texto
Blockly.Blocks['pseudo_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('"')
      .appendField(new Blockly.FieldTextInput(''), 'VALUE')
      .appendField('"');
    this.setOutput(true, 'String');
    this.setColour(160);
    this.setTooltip('Texto literal');
    this.setHelpUrl('');
  },
};

// Bloque: Literal booleano
Blockly.Blocks['pseudo_boolean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ['Verdadero', 'TRUE'],
          ['Falso', 'FALSE'],
        ]),
        'VALUE'
      );
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Valor lógico');
    this.setHelpUrl('');
  },
};

// Bloque: Variable (referencia)
Blockly.Blocks['pseudo_variable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput('variable'), 'VAR_NAME');
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('Referencia a una variable');
    this.setHelpUrl('');
  },
};

// Bloque: Operador aritmético
Blockly.Blocks['pseudo_arithmetic'] = {
  init: function () {
    this.appendValueInput('A').setCheck('Number');
    this.appendValueInput('B')
      .setCheck('Number')
      .appendField(
        new Blockly.FieldDropdown([
          ['+', '+'],
          ['-', '-'],
          ['*', '*'],
          ['/', '/'],
          ['%', '%'],
        ]),
        'OP'
      );
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(230);
    this.setTooltip('Operación aritmética');
    this.setHelpUrl('');
  },
};

// Bloque: Operador relacional
Blockly.Blocks['pseudo_comparison'] = {
  init: function () {
    this.appendValueInput('A').setCheck(null);
    this.appendValueInput('B')
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ['=', '='],
          ['!=', '!='],
          ['<', '<'],
          ['<=', '<='],
          ['>', '>'],
          ['>=', '>='],
        ]),
        'OP'
      );
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Comparación');
    this.setHelpUrl('');
  },
};

// Bloque: Operador lógico
Blockly.Blocks['pseudo_logic'] = {
  init: function () {
    this.appendValueInput('A').setCheck('Boolean');
    this.appendValueInput('B')
      .setCheck('Boolean')
      .appendField(
        new Blockly.FieldDropdown([
          ['Y', 'Y'],
          ['O', 'O'],
        ]),
        'OP'
      );
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Operación lógica');
    this.setHelpUrl('');
  },
};

// Bloque: NO lógico
Blockly.Blocks['pseudo_not'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Boolean')
      .appendField('NO');
    this.setOutput(true, 'Boolean');
    this.setColour(210);
    this.setTooltip('Negación lógica');
    this.setHelpUrl('');
  },
};
