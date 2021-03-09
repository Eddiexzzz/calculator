def on_button_pressed_a():
    global _1, _2
    if Mode == 1:
        basic.show_number(_1 + _2)
    elif Mode == 2:
        basic.show_number(_1 * _2)
    elif Number2 == 1:
        _1 += 1
        basic.show_number(_1)
    else:
        _2 += 1
        basic.show_number(_2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Mode, Number2
    if Mode == 1:
        Mode = 2
    elif Mode == 2:
        Mode = 1
    elif Number2 == 1:
        Number2 = 2
    else:
        Number2 = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global _1, _2
    if Mode == 1:
        basic.show_number(_1 - _2)
    elif Mode == 2:
        basic.show_number(_1 / _2)
    elif Number2 == 1:
        _1 += -1
        basic.show_number(_1)
    else:
        _2 += -1
        basic.show_number(_2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global Number2, _1, _2, Mode
    Number2 = 1
    _1 = 0
    _2 = 0
    Mode = 0
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_logo_down():
    global Mode
    Mode = 1
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

_2 = 0
_1 = 0
Mode = 0
Number2 = 0
basic.show_string("Calculator")
Number2 = 1
Mode = 0