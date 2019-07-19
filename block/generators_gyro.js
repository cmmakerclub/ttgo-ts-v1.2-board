module.exports = function(Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

  Blockly.JavaScript["mpu_begin"] = function(block) {
    var code =
      `
      #EXTINC#include <MPU9250_asukiaaa.h>#END
      #VARIABLEMPU9250_asukiaaa mySensor;#END
      #SETUP
        Wire.begin(GYRO_SDA, GYRO_SCL);
        mySensor.setWire(&Wire);
        mySensor.beginAccel();
        mySensor.beginGyro();
        mySensor.beginMag();
        mySensor.magUpdate();
        mySensor.magXOffset = mySensor.magX() * -1.0;
        mySensor.magYOffset = mySensor.magY() * -1.0;
        mySensor.magZOffset = mySensor.magZ() * -1.0;
      #END
      #LOOP_EXT_CODE 
        mySensor.accelUpdate();
        mySensor.gyroUpdate();
        mySensor.magUpdate();
      #END
      `;
    return code;
  };

  Blockly.JavaScript["mpu_get_accelX"] = function(block) {
    var code = "mySensor.accelX()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["mpu_get_accelY"] = function(block) {
    var code = "mySensor.accelY()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["mpu_get_accelZ"] = function(block) {
    var code = "mySensor.accelZ()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["mpu_get_gyroX"] = function(block) {
    var code = "mySensor.gyroX()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["mpu_get_gyroY"] = function(block) {
    var code = "mySensor.gyroY()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["mpu_get_gyroZ"] = function(block) {
    var code = "mySensor.gyroZ()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["mpu_get_magX"] = function(block) {
    var code = "mySensor.magX()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["mpu_get_magY"] = function(block) {
    var code = "mySensor.magY()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["mpu_get_magZ"] = function(block) {
    var code = "mySensor.magZ()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["mpu_get_direction"] = function(block) {
    var code = "mySensor.magHorizDirection()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  


  // Blockly.JavaScript["sdcard_write_csv"] = function(block) {
  //   var value_filename = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('FILENAME'), Blockly.Variables.NAME_TYPE);;
  //   var value_data1 = valueToCode(block, "DATA1", ORDER_ATOMIC);
  //   var value_data2 = valueToCode(block, "DATA2", ORDER_ATOMIC);
  //   var value_data3 = valueToCode(block, "DATA3", ORDER_ATOMIC);
  //   var value_data4 = valueToCode(block, "DATA4", ORDER_ATOMIC);
  //   var code =
  //   `
  //     sdcard = SD.open("${value_filename}.csv", FILE_WRITE);
  //     if (sdcard) {
  //       sdcard.print(String(${value_data1}));
  //       sdcard.print(",");
  //       sdcard.print(String(${value_data2}));
  //       sdcard.print(",");
  //       sdcard.print(String(${value_data3}));
  //       sdcard.print(",");
  //       sdcard.println(String(${value_data4}));
  //       sdcard.close();
  //       Serial.println("Write done...");
  //     } else {
  //       Serial.println("Write failed.");
  //     }
  //     \n
  //   `;
  //   return code;
  // };

};
