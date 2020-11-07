basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= y; x++) {
            led.plot(4 - x, y)
            led.plot(4 - y, x)
        }
        basic.pause(100)
        basic.clearScreen()
    }
})
