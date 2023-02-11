input.onGesture(Gesture.ThreeG, function () {
    n = nmax
    led.setBrightness(配列[n])
    basic.showIcon(IconNames.Ghost)
})
input.onGesture(Gesture.ScreenDown, function () {
    n = nmax
    led.setBrightness(配列[n])
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    n = nmax
    led.setBrightness(配列[n])
    basic.showIcon(IconNames.Happy)
})
let nmax = 0
let 配列: number[] = []
let n = 0
n = 9
配列 = [
0,
3,
7,
15,
31,
47,
63,
79,
95,
111,
127,
143,
159,
175,
191,
207,
223,
239,
255
]
nmax = 配列.length - 1
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    n = Math.constrain(n, 0, nmax)
    while (input.buttonIsPressed(Button.A)) {
        n += -1
        n = Math.constrain(n, 0, nmax)
        led.setBrightness(配列[n])
        basic.pause(200)
    }
    while (input.buttonIsPressed(Button.B)) {
        n += 1
        n = Math.constrain(n, 0, 9)
        led.setBrightness(配列[n])
        basic.pause(200)
    }
})
