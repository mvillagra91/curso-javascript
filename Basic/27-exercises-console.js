// 1. Crea un funciÃ³n que utilice error correctamente.
function valores(a,b){
    if(Number.isInteger(a) && Number.isInteger(b)){
        console.log("Los dos son enteros")
    }else{
        console.error("No son enteros")
    }
}
valores(1,2.2)

// 2. Crea una funciÃ³n que utilice warn correctamente.
function valores2(a,b){
    if(Number.isInteger(a) && Number.isInteger(b)){
        console.log("Los dos son enteros")
    }else{
        console.warn("Ingresa valores enteros")
    }
}
valores2(1,2.2)

// 3. Crea una funciÃ³n que utilice info correctamente.
function nombres_completo(nombre,apellido){
    if(typeof(nombre) == "string" && typeof(apellido == "string")){
        console.info(`Las variables que contienen el nombre son string`)
        console.log(`El nombre completo es: ${nombre} ${apellido}`)
    }else{
        console.log("Las variables no son strings")
    }
}

nombres_completo("mario", "villagra")
// 4. Utiliza table.
data = [
    {nombre: "mario", apellido: "villagra"},
    {nombre: "cristian", apellido: "villagra"}
]

console.table(data)
// 5. Utiliza group.
console.group("Mascotas")
console.log("perro")
console.log("gato")
console.log("pez")
// 6. Utiliza time.
console.time("Tiempo de ejecuciÃ³n 2")
for (let i = 0; i < 1000000; i++) {

}

// 7. Valida con assert si un nÃºmero es positivo.
let age = 5
console.assert(age >= 18, "El usuario debe ser mayor de edad")
// 8. Utiliza count.
console.count("click")
console.count("click")
console.count("click")

// 9. Utiliza trace.
function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecuciÃ³n.")
}

funcA()
// 10. Utiliza clear.

console.clear()