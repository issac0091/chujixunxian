basic.showString("Hello!")
cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 0)
basic.showIcon(IconNames.Happy)
if (!(input.buttonIsPressed(Button.A))) {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 0)
    basic.showString("home")
}
basic.forever(function () {
	
})
basic.forever(function () {
    if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 150)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.Black) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.White)) {
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Right_Z_Motor, 200)
    } else if (cbit_小车类.Line_Sensor(cbit_小车类.enPos.LeftState, cbit_小车类.enLineState.White) && cbit_小车类.Line_Sensor(cbit_小车类.enPos.RightState, cbit_小车类.enLineState.Black)) {
        cbit_小车类.AloneCtrlSpeed(cbit_小车类.AloneState.Left_Z_Motor, 220)
    } else {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 150)
        basic.pause(80)
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 100)
    }
})
