module.exports = {
  name: "MPU Sensor",
  color: "65",
  icon: "/static/icons/icons8_exercise_96px.png",
  blocks: [
     'mpu_begin',
     'mpu_get_accelX',
     'mpu_get_accelY',
     'mpu_get_accelZ',
     'mpu_get_gyroX',
     'mpu_get_gyroY',
     'mpu_get_gyroZ',
     'mpu_get_magX',
     'mpu_get_magY',
     'mpu_get_magZ',
     'mpu_get_direction'
    //  {
    //   xml:
    //     `<block type="sdcard_write_txt">
    //         <value name="DATA">
    //             <shadow type="basic_string">
    //                 <field name="VALUE">Hello KB-IDE</field>
    //             </shadow>
    //         </value>
    //     </block>`
    //  }
  ]
};
