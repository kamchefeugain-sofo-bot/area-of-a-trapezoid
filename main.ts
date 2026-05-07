game.splash("\"Lets calculate the area of trapezoid\"")
let base_1 = game.askForNumber("\"what is the base 1 length(cm)?\"")
let base_2 = game.askForNumber("\"what is base 2 length(cm)?\"")
let _1combine = base_1 + base_2
let _2combine = _1combine / 2
let height_1 = game.askForNumber("what is the height of the trapezoid?")
let _3_combine = _2combine * height_1
game.splash("Trapezoid area is" + ("" + _3_combine + "Units"))
