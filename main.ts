basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(4 - y, x)
            led.plot(4 - x, y)
        }
        basic.pause(200)
        basic.clearScreen()
    }
})
