module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks["mpu_begin"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1840/1840281.svg",25,25,"*"))
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
        .appendField(new Blockly.FieldImage("https://image.flaticon.com/icons/svg/1960/1960556.svg", 25, 25, "*"))
        .appendField("MPU get Accelerometer X");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_accelY"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://image.flaticon.com/icons/svg/1960/1960556.svg", 25, 25, "*"))
        .appendField("MPU get Accelerometer Y");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_accelZ"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://image.flaticon.com/icons/svg/1960/1960556.svg", 25, 25, "*"))
        .appendField("MPU get Accelerometer Z");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_gyroX"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1960/1960635.svg", 25, 25, "*"))
        .appendField("MPU get Gyroscope X");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_gyroY"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1960/1960635.svg", 25, 25, "*"))
        .appendField("MPU get Gyroscope Y");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_gyroZ"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1960/1960635.svg", 25, 25, "*"))
        .appendField("MPU get Gyroscope Z");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_magX"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1960/1960569.svg", 25, 25, "*"))
        .appendField("MPU get Magnetometer X");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_magY"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1960/1960569.svg", 25, 25, "*"))
        .appendField("MPU get Magnetometer Y");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_magZ"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1960/1960569.svg", 25, 25, "*"))
        .appendField("MPU get Magnetometer Z");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mpu_get_direction"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.flaticon.com/premium-icon/icons/svg/1840/1840351.svg", 25, 25, "*"))
        .appendField("MPU get Horizontal Direction");
      this.setOutput(true, "Number");
      this.setColour(330);
      this.setTooltip("MPU9250 triple-axis sensor");
      this.setHelpUrl("");
    }
  };

};
