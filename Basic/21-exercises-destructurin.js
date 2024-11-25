// 1. Usa desestructuraciÃ³n para extraer los dos primeros elementos de un array.
myArray = [1,2,3,4,5]
myArray2 = [5,4,6,7]

let [valu1, valu2] = myArray

console.log(valu1, valu2)
// 2. Usa desestructuraciÃ³n en un array y asigna un valor predeterminado a una variable.
let {dato1, dato2, edad1 = 33} = myArray

console.log(edad1)

// 3. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto.
let estudiante = {
    nombre: "Mario",
    apellido: "Villagra",
    alias: "Mariiotte",
    padre: {
        nombre: "Mario",
        apellido: "Villagra",
        alias: "Papa Mario",
        celular: 954952753
    }
}

nombre = estudiante.nombre
apellido = estudiante.apellido

console.log(`Nombre completo del estudiante: ${nombre} ${apellido}`)

// 4. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto y asÃ­gnalas a nuevas variables 
//con nombres diferentes.
const {nombre: name, apellido: surname, alias:sobrenombre} = estudiante
console.log(estudiante)

// 5. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto anidado.
let {padre: {nombre: nombre_padre, apellido: apellido_padre, alias: alias_padre}} = estudiante
console.log(nombre_padre)
console.log(alias_padre)

// 6. Usa propagaciÃ³n para combinar dos arrays en uno nuevo.
let array = [...myArray, ...myArray2]
console.log(array)

// 7. Usa propagaciÃ³n para crear una copia de un array.
let arrayCopy = [...array]

// 8. Usa propagaciÃ³n para combinar dos objetos en uno nuevo.
let profesor = {
    nombre: "Dario",
    apellido: "Longi"
}

let newObject = {...estudiante, ...profesor}
console.log(newObject)

// 9. Usa propagaciÃ³n para crear una copia de un objeto.
let copyObject = {...estudiante}
console.log(copyObject)

// 10. Combina desestructuraciÃ³n y propagaciÃ³n.

let numeros = [100,200,300]

let [num1, num2, ...rest] = numeros

console.log(num1)
console.log(num2)
console.log(rest)