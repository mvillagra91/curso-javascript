//Classes
/*
let person = {
    name: "mario",
    age: 33,
    alias: "mariiotte"
}
*/

class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person = new Person("Mario", 33, "Mariiotte")

console.log(person)

//valores por defecto

class DefaultPerson{
    constructor(name = "Mario", age = 0, alias = "sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person2 = new DefaultPerson("Cris", 30)

console.log(person2.alias)
console.log(person2["alias"])

person2.alias = "Mariiotte"

console.log(person2.alias)

//funciones - clases

class PersonWithMethod{
    constructor(name = "Mario", age = 0, alias = "sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }

    caminar(){
        console.log("La persona camina")
    }
}

let persona4 = new PersonWithMethod("Mario", 33, "Mariiotte")
persona4.caminar()

//propiedades privadas

class PrivatePerson{

    #bank

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank
    }
}

person5 = new PrivatePerson("Mario", 33, "Mariiotte", 123456)
person.bank = 123456789

console.log(person5)

//getters y setters

class GetPerson{
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){
        return this.#name
    }

    set bank(newBank){
        this.#bank = newBank
    }

    get bank(){
        return this.#bank
    }
}

person6 = new GetPerson("Mario", 33, "Mariiotte", 123456)
person6.bank = 1234
console.log(person6.bank)

//Herencia

class Animal{
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Emite sonido generico")
    }
}

class Dog extends Animal{
    run(){
        console.log("El perro Corre")
    }

    sound(){
        console.log("Guau")
    }
}

let myDog = new Dog("MarioDog")

myDog.run()
myDog.sound()

class Fish extends Animal{

    constructor(name, size){
        super(name)
        this.size = size
    }

    swim(){
        console.log("El pez se fue nadando")
    }
}

let myFish = new Fish("MoureFish", 10)

myFish.swim()
myFish.sound()

//metodos estaticos

class MathOperation{
    static sum(a,b){
        return a+b
    }
}
console.log(MathOperation.sum(2,2))