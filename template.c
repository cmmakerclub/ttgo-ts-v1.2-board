#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <Adafruit_GFX.h>
#include <Adafruit_ST7735.h>

Adafruit_ST7735 tft = Adafruit_ST7735(TFT_CS, TFT_DC, TFT_SDA, TFT_SCK, TFT_RST);

${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{
  pinMode(TFT_BL, INPUT);
  digitalWrite(TFT_BL, HIGH);
  tft.initR(INITR_18GREENTAB);
  tft.setTextWrap(false);
  tft.setRotation(1);
  tft.fillScreen(0x0000);
  tft.setTextSize(1);
  /* setup code */
  ${SETUP_CODE}
  /* block setup */
  ${BLOCKSETUP}
}

void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}
