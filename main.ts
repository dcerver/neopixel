let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        strip.showRainbow(1, 360)
        strip.rotate(1)
        strip.show()
        basic.pause(200)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.setBrightness(50)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
