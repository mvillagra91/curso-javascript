//Strings
let myName = "Mario"
let greeting = "Hola, " + myName + "!"
let myEmail = "mvillagra.lorca@gmail.com"

console.log(greeting)

//tipo de variable
console.log(typeof greeting)

//longitud
console.log(greeting.length)

//acceso a caracteres
console.log(greeting[0])

//metodos comunes
console.log(greeting.toUpperCase())//transforma la cadena de texto a mayuscula
console.log(greeting.toLowerCase())//transforma a minuscula
console.log(greeting.indexOf("Mario"))
console.log(greeting.includes("Hola"))
console.log(greeting.slice(0, 4))
console.log(greeting.replace("Mario", "Mariiotte"))
console.log(greeting.match("Mario"))

//Si imprimes con este tipo de comillas `` te toma los saltos de linea
let msgSaltos = `Hola
estamos probando
los saltos de linea`
console.log(msgSaltos)

console.log(`My name ${myName}! Tu email es: ${myEmail}`)