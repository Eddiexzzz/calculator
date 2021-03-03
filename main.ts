input.onButtonPressed(Button.A, function () {
    if (Number2 == 1) {
        _1 += 1
        basic.showNumber(_1)
    } else {
        _2 += 1
        basic.showNumber(_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Number2 == 1) {
        Number2 = 2
    } else {
        Number2 = 1
    }
})
input.onButtonPressed(Button.B, function () {
	
})
let Number2 = 0
let _2 = 0
let _1 = 0
basic.showString("Calculator")
Number2 = 1
