// 1. Crea una clase que reciba dos propiedades.
class Programador{
    constructor(nombre, lenguaje_favorito){
        this.nombre = nombre
        this.lenguaje_favorito = lenguaje_favorito
    }

    // 2. AÃ±ade un mÃ©todo a la clase que utilice las propiedades.
    imprimir(){
        console.log(`${this.nombre} es experto en ${this.lenguaje_favorito}`)
    }
    // 4. AÃ±ade un mÃ©todo estÃ¡tico a la primera clase.
    static welcome() {
        return "¡Bienvenido al mundo de la programación!";
    }
}

// 3. Muestra los valores de las propiedades e invoca a la funciÃ³n.

let programador = new Programador("Mario", "JavaScript")
programador.imprimir()

// 5. Haz uso del mÃ©todo estÃ¡tico.
console.log(Programador.welcome())
// 6. Crea una clase que haga uso de herencia.
class Player{
    constructor(nombre){
        this.nombre = nombre
    }

    play(){
        console.log(`${this.nombre} esta jugando`)
    }
}

//Clase PlayerFortNite hereda los datos de clase player
class PlayerFortNite extends Player{
    constructor(name){
        //Con esto obtenemos el nombre de la clase Padre
        super(name)
    }
    dormir(){
        console.log("Al terminar de jugar ira a dormir")
    }
}

let jugador = new PlayerFortNite("Mario")

jugador.play()
jugador.dormir()

// 7. Crea una clase que haga uso de getters y setters.
class Animal{
    // 8. Modifica la clase con getters y setters para que use propiedades privadas.
    #nombre

    constructor(nombre){
        this.#nombre = nombre
    }

    get nombreAnimal(){
        return this.#nombre
    }

    set cambiarNombre(nombre){
        this.#nombre = nombre
    }
}
// 9. Utiliza los get y set y muestra sus valores.
let myAnimal = new Animal("doggy")
console.log(myAnimal.nombreAnimal)

myAnimal.cambiarNombre = "odi"
console.log(myAnimal.nombreAnimal)

// 10. Sobrescribe un mÃ©todo de una clase que utilice herencia.

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    imprimir(){
        console.log(`${this.nombre} ${this.apellido}`)
    }
}

let person = new Persona("mario", "villagra")

person.imprimir()