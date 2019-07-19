module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks["mpu_begin"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://image.flaticon.com/icons/svg/1137/1137754.svg",20,20,"*"))
        .appendField("MPU begin");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_accelX"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get accel X");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_accelY"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get accel Y");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_accelZ"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get accel Z");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_gyroX"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get gyro X");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_gyroY"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get gyro Y");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_gyroZ"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get gyro Z");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_magX"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get mag X");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_magY"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get mag Y");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_magZ"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get mag Z");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_direction"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1163/1163412.svg", 20, 20, "*"))
        .appendField("MPU get horizontal direction");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

};
