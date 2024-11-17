// 1. Crea un array que almacene cinco animales.

let arrayAnimales = ["perro", "gato", "caballo", "conejo", "elefante"]
console.log(arrayAnimales)
// 2. AÃ±ade dos mÃ¡s. Uno al principio y otro al final.
arrayAnimales.push("girafa")
console.log(arrayAnimales)
arrayAnimales.unshift("rinoceronte")
console.log(arrayAnimales)


// 3. Elimina el que se encuentra en tercera posiciÃ³n.
console.log(arrayAnimales);
arrayAnimales.splice(2,1)
console.log(arrayAnimales)
// 4. Crea un set que almacene cinco libros.
let mySet = new Set()
mySet = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])
console.log(mySet)

// 5. AÃ±ade dos mÃ¡s. Uno de ellos repetido.

mySet.add("libro1")
console.log(mySet)

// 6. Elimina uno concreto a tu elecciÃ³n.
mySet.delete("libro1")
console.log(mySet)

// 7. Crea un mapa que asocie el nÃºmero del mes a su nombre.
let myMap = new Map()
myMap = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"]
])

console.log(myMap)

// 8. Comprueba si el mes nÃºmero 5 existe en el map e imprime su valor.

console.log(myMap.get("5"))

// 9. AÃ±ade al mapa una clave con un array que almacene los meses de verano.
myMap.set("verano", ["Diciembre", "Enero", "Febrero"])
console.log(myMap)

// 10. Crea un Array, transfÃ³rmalo a un Set y almacÃ©nalo en un Map.

let array = ["manzana", "pera"]
arraySet = new Set(array);

console.log(arraySet);

let arrayMap = new Map()

arrayMap.set("frutas", arraySet)
console.log(arrayMap)