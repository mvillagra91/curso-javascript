// if/else/else if/ternaria

const { Console } = require("console")

// 1. Imprime por consola tu nombre si una variable toma su valor.
let valor = 1

if(valor == 1){
    console.log("Mario Villagra")
}else{
    console.log("Variable distinta a 1")
}

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.
let usuario = "mario"
let password = "123"

if(usuario == "mario" && password == "123"){
    console.log("Ingreso exitoso")
}else{
    console.log("Error usuiario o password invalidos")
}

// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.
let numero = 1
if(numero < 0){
    console.log("El valor es positivo")
}else if(numero > 0){
    console.log("El valor es negativo")
}else if(numero == 0){
    console.log("El valor es cero")
}
else
    console.log("Valor invalido")

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.
age = 18

if(age >= 18){
    console.log("Puedes votar")
}else if(age < 18){
    let edadNesasaria = 18
    let diferencia = edadNesasaria - age
    console.log(`No cumples con la edad para votar. Tienes ${age} y te faltan ${diferencia} para tener ${edadNesasaria}`);
}else
    console.log("Error al ingresar dato")

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let edad = 17
const mensaje = edad >= 18 ? "Eres adulto" : "Eres menor"
console.log(mensaje)

// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".
const fechaActual = new Date();
const mes = fechaActual.getMonth();
let mesActual = mes == 13 ? mes-1 : mes+1

console.log(mesActual);

if(mesActual === 12 || mesActual === 1 || mesActual === 2){
    console.log("Verano")
}else if(mesActual === 3 || mesActual === 4 || mesActual === 5){
    console.log("otono")
}else if(mesActual === 6 || mesActual === 7 || mesActual === 8){
    console.log("invierno")
}else if(mesActual === 9 || mesActual === 10 || mesActual === 11){
    console.log("primavera")
}else
    console.log("Ingresos invalidos")

// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.
//Almaceno el año en la variable year
let year = new Date()
year = year.getFullYear()
//Obtengo la cantidad de dias dentro del mes dependiendo igualmente del año
let diasMes = new Date(year, mesActual, 0).getDate()
console.log(diasMes)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let idioma = 2

switch (idioma) {
    case 1:
        console.log("hola")    
        break;
    case 2:
        console.log("hi")
        break;
    default:
        console.log("Error. Saludos inexistente")
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
//Ejercicio 6: Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".
switch (mesActual) {
    case 12, 1, 2:
        console.log("Verano")
        break;
    case 3, 4, 5:
        console.log("otono")
        break;
    case 6, 7, 8:
        console.log("invierno")
        break;
    case 9, 10, 11:
        console.log("primavera")
        break;
    default:
        break;
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7.
//Ejercicio 7: // 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.

function cantidad_dias(mesActual){
    let year = new Date()
    year = year.getFullYear()
    //Obtengo la cantidad de dias dentro del mes dependiendo igualmente del año
    let diasMes = new Date(year, mesActual, 0).getDate()
    console.log(diasMes)
}

switch (mesActual) {
    case 1:
        cantidad_dias(mesActual)
        break;
    case 2:
        cantidad_dias(mesActual)
        break;
    case 3:
        cantidad_dias(mesActual)
        break;
    case 4:
        cantidad_dias(mesActual)
        break;
    case 5:
        cantidad_dias(mesActual)
        break;
    case 6:
        cantidad_dias(mesActual)
        break;
    case 7:
        cantidad_dias(mesActual)
        break;
    case 8:
        cantidad_dias(mesActual)
        break;
    case 9:
        cantidad_dias(mesActual)
        break;
    case 10:
        cantidad_dias(mesActual)
        break;
    case 11:
        cantidad_dias(mesActual)
        break;
    case 12:
        cantidad_dias(mesActual)
        break;
    default:
        break;
}