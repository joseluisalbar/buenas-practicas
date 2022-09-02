input.onButtonPressed(Button.A, function () {
    SUMA = NUMERO1 + NUMERO_2
    basic.showNumber(SUMA)
    TEXTO = "SUMASTE"
})
input.onButtonPressed(Button.AB, function () {
    MULTIPLICACION = NUMERO1 * NUMERO_2
    basic.showNumber(MULTIPLICACION)
    TEXTO = "MULTIPLICASTE"
})
input.onButtonPressed(Button.B, function () {
    RESTA = NUMERO1 - NUMERO_2
    basic.showNumber(RESTA)
    TEXTO = "RESTASTE"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(NUMERO1)
    basic.showNumber(NUMERO_2)
    basic.showString(TEXTO)
})
let TEXTO = ""
let MULTIPLICACION = 0
let RESTA = 0
let SUMA = 0
let NUMERO_2 = 0
let NUMERO1 = 0
NUMERO1 = randint(1, 5)
NUMERO_2 = randint(1, 5)
SUMA = 0
RESTA = 0
MULTIPLICACION = 0
TEXTO = ""
basic.forever(function () {
	
})
