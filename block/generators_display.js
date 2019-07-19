const nativeImage = require("electron").nativeImage;
var createBuffer = function(pixels, width, height) {
  var depth = 4,
    pixelsLen = pixels.length,
    unpackedBuffer = [],
    threshold = 120;

  var buffer = new Buffer((width * (Math.ceil(height / 8) * 8)) / 8);
  buffer.fill(0x00);// filter pixels to create monochrome image data
  for (var i = 0; i < pixelsLen; i += depth) { // just take the red value
    var pixelVal = pixels[i + 1] = pixels[i + 2] = pixels[i];
    pixelVal = (pixelVal > threshold)
      ? 1
      : 0;
    unpackedBuffer[i / depth] = pixelVal; // push to unpacked buffer list
  }
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y += 8) {
      for (var cy = 0; cy < 8; cy++) {
        var iy = y + cy;
        if (iy >= height) { break; }
        buffer[x * Math.ceil(height / 8) +
        Math.floor(y / 8)] |= unpackedBuffer[iy * width + x] << cy;
      }
    }
  }
  return buffer;
};

module.exports = function(Blockly) {
  "use strict";
  Blockly.JavaScript["i2c128x64_create_image"] = function(block) {
    var dataurl = block.inputList[1].fieldRow["0"].src_;
    var image = nativeImage.createFromDataURL(dataurl);
    var size = image.getSize();
    var buff = createBuffer(image.getBitmap(), size.width, size.height);
    var hexStringArr = "";
    for (let i = 1; i <= buff.length; i++) {
      hexStringArr += (buff[i - 1] < 16)
        ? `0x0${buff[i - 1].toString(16)},`
        : `0x${buff[i - 1].toString(16)},`;
      if (i % 20 == 0) { hexStringArr += "\n"; }
    }
    hexStringArr = hexStringArr.trim();
    if (hexStringArr.endsWith(",")) {
      hexStringArr = hexStringArr.substring(0, hexStringArr.length - 1);
    }
    var code = `(std::vector<uint8_t>{${hexStringArr}})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["i2c128x64_display_image"] = function(block) {
    var value_img = Blockly.JavaScript.valueToCode(block,
      "img",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_width = Blockly.JavaScript.valueToCode(block,
      "width",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block,
      "height",
      Blockly.JavaScript.ORDER_ATOMIC);
    var code = `display.drawFastImage(${value_x}, ${value_y}, ${value_width},${value_height},${value_img}.data());\n`;
    return code;
  };

  Blockly.JavaScript["tft_display_setRotation"] = function(block) {
    var code = "tft.setRotation(" + block.getFieldValue("rotation") + ");\n";
    return code;
  };

  Blockly.JavaScript["tft_display_fillScreen"] = function(block) {
    let color = block.getFieldValue("COLOR");
    color = color.replace("#", "0x");
    let sourceColor = parseInt(color, 16);
    let red = (sourceColor & 0x00FF0000) >> 16;
    let green = (sourceColor & 0x0000FF00) >> 8;
    let blue = sourceColor & 0x000000FF;
    let out = (red >> 3 << 11) + (green >> 2 << 5) + (blue >> 3);
    out = out.toString(16);
    var code = "tft.fillScreen(0x" + out + ");\n";
    return code;
  };

  function rgbto16bit(colorIN) {
    let color = colorIN.replace("#", "0x");
    let sourceColor = parseInt(color, 16);
    let red = (sourceColor & 0x00FF0000) >> 16;
    let green = (sourceColor & 0x0000FF00) >> 8;
    let blue = sourceColor & 0x000000FF;
    let out = (red >> 3 << 11) + (green >> 2 << 5) + (blue >> 3);
    out = out.toString(16);
    return out;   // The function returns the product of p1 and p2
  }

  Blockly.JavaScript["tft_display_print"] = function(block) {
    var value_text = Blockly.JavaScript.valueToCode(block,
      "TEXT",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block,
      "X",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "Y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_textSize = block.getFieldValue("textSize");
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));

    var code =
      `
      tft.setTextSize(${value_textSize});
      tft.setCursor(${value_x}, ${value_y});
      tft.setTextColor(0x${value_color});
      tft.println(String(${value_text}));
      `;
    return code;
  };
  Blockly.JavaScript["tft_display_draw_line"] = function(block) {
    var value_x0 = Blockly.JavaScript.valueToCode(block,
      "x0",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y0 = Blockly.JavaScript.valueToCode(block,
      "y0",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_x1 = Blockly.JavaScript.valueToCode(block,
      "x1",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y1 = Blockly.JavaScript.valueToCode(block,
      "y1",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));

    var code =
      `
      tft.drawLine(${value_x0},${value_y0},${value_x1},${value_y1},0x${value_color});
      `;
    return code;
  };

  Blockly.JavaScript["tft_display_draw_rect"] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_width = Blockly.JavaScript.valueToCode(block,
      "width",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_height = Blockly.JavaScript.valueToCode(block,
      "height",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));
    var checkbox_fill = block.getFieldValue("fill") == "TRUE";

    if (checkbox_fill) {
      var code =
        `
        tft.fillRect(${value_x},${value_y},${value_width},${value_height},0x${value_color});
        `;
    } else {
      var code =
        `
        tft.drawRect(${value_x},${value_y},${value_width},${value_height},0x${value_color});
        `;
    }
    return code;
  };

  Blockly.JavaScript["tft_display_draw_circle"] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block,
      "x",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block,
      "y",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_r = Blockly.JavaScript.valueToCode(block,
      "r",
      Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = rgbto16bit(block.getFieldValue("COLOR"));
    var checkbox_fill = block.getFieldValue("fill") == "TRUE";

    if (checkbox_fill) {
      var code =
        `
        tft.fillCircle(${value_x},${value_y},${value_r},0x${value_color});
        `;
    } else {
      var code =
        `
        tft.drawCircle(${value_x},${value_y},${value_r},0x${value_color});
        `;
    }
    return code;
  };

  Blockly.JavaScript["tft_display_width"] = function(block) {
    var code = "tft.width()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["tft_display_height"] = function(block) {
    var code = "tft.height()";
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

};