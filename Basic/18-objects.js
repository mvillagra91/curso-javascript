// Objetos

// Sintaxis

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Acceso a propiedades

// NotaciÃ³n punto
console.log(person.name)

// NotaciÃ³n de corchetes
console.log(person["name"])

// ModificaciÃ³n de propiedades

person.name = "Brais Moure"
console.log(person.name)

console.log(typeof person.age)
person.age = "37"
console.log(person.age)
console.log(typeof person.age)

// EliminaciÃ³n de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "braismoure@mouredev.com"
person["age"] = 37

console.log(person)

// MÃ©todos (funciones)

let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    }
}
person2.walk()

// AnidaciÃ³n de objetos

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} aÃ±os de experiencia trabaja.`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

let person4 = {
    name: "Brais Moure",
    alias: "MoureDev",
    email: "braismoure@mouredev.com",
    age: 37
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// IteraciÃ³n

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

function Person(name, age) { // DeberÃ­a ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Brais", 37)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)