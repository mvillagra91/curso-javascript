// Set

// DeclaraciÃ³n

let mySet = new Set()

console.log(mySet)

// InicializaciÃ³n

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// MÃ©todos comunes

// add y delete

mySet.add("https://moure.dev")

console.log(mySet)

mySet.delete("https://moure.dev")

console.log(mySet)

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)