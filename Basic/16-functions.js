// Funciones

// Simple

function myFunc() {
    console.log("Â¡Hola, funciÃ³n!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parÃ¡metros

function myFuncWithParams(name) {
    console.log(`Â¡Hola, ${name}!`)
}

myFuncWithParams("Brais")
myFuncWithParams("MoureDev")

// Funciones anÃ³nimas

const myFunc2 = function (name) {
    console.log(`Â¡Hola, ${name}!`)
}

myFunc2("Brais Moure")

// Arrow functions

const myFunc3 = (name) => {
    console.log(`Â¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`Â¡Hola, ${name}!`)

myFunc3("Brais Moure")
myFunc4("Brais Moure")

// ParÃ¡metros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("FunciÃ³n externa")
    function intern() {
        console.log("FunciÃ³n interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "funciÃ³n de orden superior")

// forEach

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))