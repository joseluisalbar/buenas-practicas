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
    basic.showString(palabra)
})
let TEXTO = ""
let NUMERO1 = 0
let MULTIPLICACION = 0
let RESTA = 0
let SUMA = 0
let NUMERO_2 = 0
let palabra = ""
palabra = "papaya"
NUMERO_2 = randint(1, 5)
SUMA = 0
RESTA = 0
MULTIPLICACION = 0
basic.forever(function () {
	
})
