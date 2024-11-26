import { Estudiante, nombre_constante, suma } from "./31-modules-exercises.mjs";

console.log(suma(1,2))

console.log(nombre_constante)

let estudiante = new Estudiante("Mario", "Javascript")

estudiante.imprimir()

export function holaMundo(){
    console.log("Hola mundo")
}

export const apellido = "Villagra"

export class Mascota{
    constructor(raza, nombre){
        this.raza = raza
        this.nombre = nombre
    }

    sonido_comun(){
        console.log("Sonido comun")
    }
}