wifiIot.microIoT_MQTT_Event(wifiIot.TOPIC.topic_0, function (message) {
    serial.writeLine("" + (message))
})
wifiIot.microIoT_MQTT_Event(wifiIot.TOPIC.topic_1, function (message) {
    serial.writeLine("" + (message))
})
wifiIot.microIoT_WIFI("aaa", "12345678")
wifiIot.microIoT_MQTT(
"Wkb6YPk4g",
"ZzbeLEkVgz",
"sTLIHZ1MR",
wifiIot.SERVERS.China
)
wifiIot.microIoT_add_topic(wifiIot.TOPIC.topic_1, "7P_mOWJMR")
