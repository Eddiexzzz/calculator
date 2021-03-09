// A will change the numbers value by 1 and add and multiply them
input.onButtonPressed(Button.A, function () {
    // Addition
    // Multiplication
    // Change the first number by 1
    if (Mode == 1) {
        basic.showNumber(_1 + _2)
    } else if (Mode == 2) {
        basic.showNumber(_1 * _2)
    } else if (Number2 == 1) {
        _1 += 1
        basic.showNumber(_1)
    } else {
        // Change the second number by 1
        _2 += 1
        basic.showNumber(_2)
    }
})
// Changes active number and changes modes
input.onButtonPressed(Button.AB, function () {
    // Change from addition/subtraction mode to multiplication/division mode
    // Change from multiplication/division mode to addition/subtraction mode
    // Change active number from 1 to 2
    if (Mode == 1) {
        Mode = 2
    } else if (Mode == 2) {
        Mode = 1
    } else if (Number2 == 1) {
        Number2 = 2
    } else {
        // Change active number from 2 to 1
        Number2 = 1
    }
})
// B will change the numbers value by -1 and subtract and divide them
input.onButtonPressed(Button.B, function () {
    // Subtraction
    // Division
    // Change the first number by -1
    if (Mode == 1) {
        basic.showNumber(_1 - _2)
    } else if (Mode == 2) {
        basic.showNumber(_1 / _2)
    } else if (Number2 == 1) {
        _1 += -1
        basic.showNumber(_1)
    } else {
        // Change the second number by -1
        _2 += -1
        basic.showNumber(_2)
    }
})
// Resets the program
input.onGesture(Gesture.Shake, function () {
    Number2 = 1
    _1 = 0
    _2 = 0
    Mode = 0
    basic.clearScreen()
})
// Sets the calculator to addition/subtraction mode
input.onGesture(Gesture.LogoDown, function () {
    Mode = 1
})
// Sets the variable for use
let Mode = 0
let Number2 = 0
let _2 = 0
let _1 = 0
basic.showString("Calculator")
Number2 = 1
Mode = 0
