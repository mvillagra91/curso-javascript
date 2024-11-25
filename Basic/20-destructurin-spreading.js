myArray = [1,2,3,4,5]

let person = {
    name: "Mario",
    age: 33,
    alias: "Mariiotte"
}

myValue = person.name
console.log(myValue)

//desestructuring

//sintaxis en array

let [myValue0,myValue1,myValue2,myValue3,myValue4] = myArray

console.log(myValue0)

//sintaxis array con valores predeterminados

let [myValue5,myValue6,myValue7,myValue8,myValue9, myValue10 = 0] = myArray

console.log(myValue10)

//ignorar elementos del array
let [myValue11, , , myValue12,myValue13 = 0] = myArray

console.log(myValue10)

//sintaxis object

let {name, age, alias} = person

console.log(name)

//sintaxis objetos con valores predeterminados

let {name: name2, age2, alias2, email2 = "mvillagra.lorca@gmail.com"} = person

console.log(name)
console.log(age2)
console.log(alias2)
console.log(email2)

//propagacion(...)

let myArray3 = [...myArray]

console.log(myArray3)

let myArray4 = [...myArray3, myArray]

console.log(myArray4)