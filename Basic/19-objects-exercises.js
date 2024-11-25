// 1. Crea un objeto con 3 propiedades.

let person = {
    nombre: "Mario",
    correo: "mvillagra.lorca@gmail.com",
    numero: 954952753
}

// 2. Accede y muestra su valor.

console.log(person)

// 3. Agrega una nueva propiedad.
person.direccion = "Libertador Bernardo Ohiggins"
console.log(person)
// 4. Elimina una de las 3 primeras propiedades.
delete person.nombre 
delete person.numero
delete person.correo
console.log(person)
// 5. Agrega una funciÃ³n e invÃ³cala.
let person2 = {
    nombre: "Mario",
    correo: "mvillagra.lorca@gmail.com",
    numero: 954952753,
    call: function(){
        console.log("Llamando por telefono...");
    }
}

person2.call()

// 6. Itera las propiedades del objeto.

for (let key in person2) {
    console.log(key + ": " + person2[key])
}

// 7. Crea un objeto anidado.

let estudiante = {
    nombre: "mario",
    apellido: "villagra",
    edad:33,
    padre:{
        nombre: "mario",
        apellido: "villagra",
        edad: 59,
        numero: 954952753,
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas.
for(valores in estudiante.padre){
    console.log(estudiante.padre[valores])
}
// 9. Comprueba si los dos objetos creados son iguales.
console.log(person == estudiante)

// 10. Comprueba si dos propiedades diferentes son iguales.
console.log(estudiante.apellido === estudiante.padre.apellido)