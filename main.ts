let abstand1 = 0
basic.showIcon(IconNames.Yes)
MuseOLED.init()
basic.pause(100)
MuseOLED.clear()
MuseOLED.clear()
MuseOLED.writeStringNewLine("Alois Bachinger")
MuseOLED.newLine()
MuseOLED.writeStringNewLine("Temp.:" + input.temperature() + " Grad")
robotbit.MotorRun(robotbit.Motors.M1A, 161)
led.enable(false)
basic.forever(function () {
    basic.pause(2000)
    MuseOLED.clear()
    basic.pause(2000)
    abstand1 = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    MuseOLED.writeNumNewLine(abstand1)
    basic.pause(200)
    MuseOLED.writeNumNewLine(sonar.ping(
    DigitalPin.P2,
    DigitalPin.P12,
    PingUnit.Centimeters
    ))
    if (abstand1 < 15) {
        robotbit.MotorRun(robotbit.Motors.M1A, 138)
        robotbit.Servo(robotbit.Servos.S1, 143)
    } else {
        robotbit.MotorRun(robotbit.Motors.M1A, -108)
        robotbit.Servo(robotbit.Servos.S1, 85)
    }
    MuseOLED.writeStringNewLine("Temp.:" + input.temperature() + " Grad")
})
