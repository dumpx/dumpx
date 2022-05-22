#include<SoftwareSerial.h>
SoftwareSerial esp(3,4);
#define SSID "Elegance_wifi_3"
#define PASS "Elge@wifi3"
#define trigerpoint 8
#define echopoint 9

int a;
float duration,distance;

// Wifi
String sendAT(String command, const int timeout) {
  String response = "";
  esp.print(command);
  long int current_time = millis();
  while (millis() - current_time < timeout) {
    while (esp.available()) {
      char c = esp.read();
      response += c;
    }
  }
  Serial.print(response);
  return response;
}

void setup(){
  Serial.begin(9600);
  esp.begin(9600);
  sendAT("AT\r\n", 1000);
  sendAT("AT+CWMODE=1\r\n", 1000);
  sendAT("AT+CWJAP=\"" SSID "\",\"" PASS "\"\r\n",2000);
  while(!esp.find("OK")){}
  sendAT("AT+CIFSR\r\n", 1000);
  sendAT("AT+CIPMUX=0\r\n", 1000);

  pinMode(trigerpoint, OUTPUT);
  pinMode(echopoint, INPUT);

}

void loop() {
  digitalWrite(trigerpoint,0);
  delayMicroseconds(2);
  digitalWrite(trigerpoint,1);
  delayMicroseconds(10);
  digitalWrite(trigerpoint,0);
  duration=pulseIn(echopoint,1);
  distance=(duration*0.034)/2;
  Serial.println("distance = ");
  Serial.println(distance);
  delay(1000);
  String A = String(distance);
  updateTS(A);
}

// API
void updateTS(String A) {
  esp.listen();
  Serial.println("");
  sendAT("AT+CIPSTART=\"TCP\",\"api.thingspeak.com\",80\r\n", 15000);
  String cmd = "GET /update?key=88445Z5IZY8TQKG7&field1=" + A + "\r\n";
  String cmdlen = String(cmd.length());
  sendAT("AT+CIPSEND=" + cmdlen + "\r\n", 15000);
  esp.print(cmd);
  Serial.println("");
  sendAT("AT+CIPCLOSE\r\n", 15000);
  Serial.println("");
}