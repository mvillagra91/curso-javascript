// 1. Escribe un comentario en una lÃ­nea.
console.log("Comentario en una linea")

// 2. Escribe un comentario en varias lÃ­neas.
console.log("Comentario en mas \n de una linea")

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.
let cadenaTexto = "Esto es un string"
let numero = 5
let falso = false
let Undefined
let variableNula = null
let mySymbol = Symbol("Simbolo")
let BigInt = 1131851626452168518965121561621651561621651

// 4. Imprime por consola el valor de todas las variables.
console.log(cadenaTexto)
console.log(numero)
console.log(falso)
console.log(Undefined)
console.log(variableNula)
console.log(mySymbol)
console.log(BigInt)

// 5. Imprime por consola el tipo de todas las variables.
console.log(typeof(cadenaTexto))
console.log(typeof(numero))
console.log(typeof(falso))
console.log(typeof(Undefined))
console.log(typeof(variableNula))
console.log(typeof(mySymbol))
console.log(typeof(BigInt))

// 6. A continuaciÃ³n, modifica los valores de las variables por otros del mismo tipo.
cadenaTexto = "cambiar variable"
numero = 2
falso = true
Undefined = undefined
variableNula = 1
mySymbol = Symbol("OtroSimbolo")
BigInt = 1128965121965169415n

// 7. A continuaciÃ³n, modifica los valores de las variables por otros de distinto tipo.
cadenaTexto = 1
numero = "hola, ya no es un numero"
falso = "¿falso?"
Undefined = 1
variableNula = 'no es nula'
mySymbol = 42
BigInt = "TinyInt"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.
const cadenaTexto2 = cadenaTexto
const numero2 = numero
const falso2 = falso
const Undefined2 = Undefined
const variableNula2 = variableNula
const mySymbol2 = mySymbol
const BigInt2 = BigInt

console.log("5"+5);

// 9. A continuaciÃ³n, modifica los valores de las constantes.
//cadenaTexto2 = "2"
console.log("Esta es una constante: "+cadenaTexto2)

// 10. Comenta las lÃ­neas que produzcan algÃºn tipo de error al ejecutarse.
//Al ser una constante no se puede hacer el cambio de la variable
//cadenaTexto2 = "2"