input.onButtonPressed(Button.A, function () {
    if (Mode == 1) {
        basic.showNumber(_1 + _2)
    } else if (Mode == 2) {
        basic.showNumber(_1 * _2)
    } else {
        if (Number2 == 1) {
            _1 += 1
            basic.showNumber(_1)
        } else {
            _2 += 1
            basic.showNumber(_2)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Mode == 1) {
        Mode = 2
    } else if (Mode == 2) {
        Mode = 1
    } else {
        if (Number2 == 1) {
            Number2 = 2
        } else {
            Number2 = 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Mode == 1) {
        basic.showNumber(_1 - _2)
    } else if (Mode == 2) {
        basic.showNumber(_1 / _2)
    } else {
        if (Number2 == 1) {
            _1 += -1
            basic.showNumber(_1)
        } else {
            _2 += -1
            basic.showNumber(_2)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    Number2 = 1
    _1 = 0
    _2 = 0
    Mode = 0
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    Mode = 1
})
let Mode = 0
let Number2 = 0
let _2 = 0
let _1 = 0
basic.showString("Calculator")
Number2 = 1
Mode = 0
