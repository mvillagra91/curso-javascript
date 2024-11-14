// 1. Concatena dos cadenas de texto.
let saludo = "Hola, "
let myNombre = "Mario"

let sayHi = saludo+myNombre
//Cadenas de texto sin variables
console.log("Hola "+ "estamos concatenando dos cadenas de textos");
//Cadenas de texto con variables
console.log(`${saludo}${myNombre}`)

// 2. Muestra la longitud de una cadena de texto.
console.log(sayHi.length);
// 3. Muestra el primer y Ãºltimo carÃ¡cter de un string.
console.log(sayHi[0])
for(i = 0; i<sayHi.length;i++){
    let size = i;
}
console.log(sayHi)
console.log("El ultimo caracter es: "+ sayHi[i-1])

// 4. Convierte a mayÃºsculas y minÃºsculas un string.
console.log(sayHi.toUpperCase())
console.log(sayHi.toLowerCase())

// 5. Crea una cadena de texto en varias lÃ­neas.
console.log(`cadena de texto
    en muchas o merjor dicho
    varias lineas`)

// 6. Interpola el valor de una variable en un string.
let edad = 33
let estatura = 1.66

console.log(`Tengo ${edad} y mido ${estatura}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
let frase = "Hola mi nombre es mario"

console.log(frase.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(frase.includes("nombre"))

// 9. Comprueba si dos strings son iguales.
console.log(saludo == myNombre)

// 10. Comprueba si dos strings tienen la misma longitud.

console.log(saludo.length == saludo.length)