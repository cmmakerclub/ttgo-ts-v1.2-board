module.exports = function(Blockly) {
  "use strict";
  Blockly.Blocks["io_pin_dummy_input"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["SW1(IO34)", "34"],
          ["SW2(IO35)", "35"],
          ["SW3(IO39)", "39"],
          ["PIEZO (IO25)", "25"]
        ]), "IO_PIN");
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

};

