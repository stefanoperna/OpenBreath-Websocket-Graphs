/**
* Communicates float data over serial without loss of precision
*/

float a=0;

void setup() {
  Serial.begin(9600); // setup serial connection speed
}

void loop() {

  serialFloatPrint(sin(a));
  serialFloatPrint(cos(a));
  serialFloatPrint(sin(a)*sin(a));
  Serial.write(";");
  a = a + 0.1;
  delay(100);
}


void serialFloatPrint(float f) {
  byte * b = (byte *) &f;
  Serial.write("f");
  Serial.write(b[0]);
  Serial.write(b[1]);
  Serial.write(b[2]);
  Serial.write(b[3]);
  Serial.write(",");
}
