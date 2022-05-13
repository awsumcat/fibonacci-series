input.onButtonPressed(Button.A, function () {
    list.push(list[list.length - 1] + list[list.length - 2])
})
input.onButtonPressed(Button.B, function () {
    for (let value of list) {
        basic.showNumber(value)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
let list: number[] = []
list = [1, 1]
basic.forever(function () {
	
})
