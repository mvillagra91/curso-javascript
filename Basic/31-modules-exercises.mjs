import { apellido, holaMundo, Mascota } from "./32-modulo.mjs"

// 1. Exporta una funciÃ³n.
export function suma(a,b){
    return a+b
}
// 2. Exporta una constante.
export const nombre_constante = "mario"

// 3. Exporta una clase.
export class Estudiante{
    constructor(nombre, curso){
        this.nombre = nombre
        this.curso = curso
    }

    imprimir(){
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}
// 4. Importa una funciÃ³n.
holaMundo()
// 5. Importa una constante.
console.log(apellido)
// 6. Importa una clase.

let myMascota = new Mascota("Perro", "Oso")
myMascota.sonido_comun()
// 7. Exporta una funciÃ³n, una constante y una clase por defecto (en caso de que lo permita).

// defaultExport.js

const MY_CONSTANT = 42

function myFunction() {
    return "Mi funciÃ³n"
}

class MyClass {
    constructor() {
        this.name = "Mi clase"
    }
}

export default { MY_CONSTANT, myFunction, MyClass }

// 8. Importa una funciÃ³n, una constante y una clase por defecto (en caso de que lo permita).

// import defaultModule from './defaultExport.js'

// console.log(defaultModule.MY_CONSTANT)
// console.log(defaultModule.myFunction())

// let defaultInstance = new defaultModule.MyClass()
// console.log(defaultInstance.name)

// 9. Exporta una funciÃ³n, una constante y una clase desde una carpeta.

// utils/index.js

export function subtract(a, b) {
    return a - b
}

export const MAX_VALUE = 100

export class Animal {
    constructor(type) {
        this.type = type
    }
}

// 10. Importa una funciÃ³n, una constante y una clase desde un directorio diferente al anterior.

// import { subtract, MAX_VALUE, Animal } from './utils/index.js'

// console.log(subtract(10, 5))
// console.log(MAX_VALUE)

// let dog = new Animal("Perro")
// console.log(dog.type)