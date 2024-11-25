// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.
// 1. Crea una funciÃ³n que reciba dos nÃºmeros y devuelva su suma.
function suma(a,b){
    console.log(a+b);
}
suma(5,4)
// 2. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva el mayor de ellos.
function mayorNum(array){
    numeroMayor = 0
    for(i=0;i<array.length;i++){
        if(array[i]>numeroMayor){
            numeroMayor = array[i] 
        }
    }
    console.log(numeroMayor)
}
let arrayNumeros = [1,2,3,4,5,6,7,8,9]

mayorNum(arrayNumeros)
// 3. Crea una funciÃ³n que reciba un string y devuelva el nÃºmero de vocales que contiene.
function getString(string){
    for(i=0; i<string.length;i++){
        let vocales = 0
        if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
            vocales++
        }
    }
}
getString("Cantidad de variables")
// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas.

function arrayMayuscula(array){
    let array2 = []
    for(i=0;i<array.length;i++){
        let variable = ""
        variable = array[i]
        array2.push(variable.toUpperCase())
    }
    console.log(array2)
}
let arrayDeStrings = ["palabra","hola","tengosueno"]
arrayMayuscula(arrayDeStrings)

// 5. Crea una funciÃ³n que reciba un nÃºmero y devuelva true si es primo, y false en caso contrario.
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false; 
        }
    }

    return true; 
}

console.log(esPrimo(1))
// 6. Crea una funciÃ³n que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
let arrayNumeros1 = [1,3,5,7,9,11,13,15]
let arrayNumeros2 = [1,2,4,6,5,3,10,12]

let arrayComun = []

function variablesComunes(array1, array2){

    for (const numero1 of arrayNumeros1){
        for (const numero2 of arrayNumeros2){
            if(numero1 == numero2){
                arrayComun.push(numero1)
            }
        }
    }
    console.log("Variables en comun: "+arrayComun);
}

variablesComunes(arrayNumeros1,arrayNumeros2)
// 7. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva la suma de todos los nÃºmeros pares.
arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11]

function sumaPares(array){
    let sumaPares = 0
    for(i=0;i<array.length;i++){
        if(array[i]%2 == 0){
            console.log(array[i]);
            sumaPares += array[i]
        }
    }
    console.log("La suma de los pares es: "+sumaPares)
}
sumaPares(arrayNumeros)
// 8. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva un nuevo array con cada nÃºmero elevado al cuadrado.
arrayNumeros = [1,2,3,4,5,6,7]
let nuevoArray = []

function numerosCuadrados(array){
    for(i=0;i<array.length;i++){
        nuevoArray.push(arrayNumeros[i]**=2)
    }
    console.log(nuevoArray)
}
numerosCuadrados(arrayNumeros)
// 9. Crea una funciÃ³n que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
function invertirPalabras(cadena) {
    // Dividimos la cadena en un array de palabras, luego invertimos el array y finalmente lo unimos de nuevo en una cadena.
    return cadena.split(' ').reverse().join(' ');
}

// Ejemplo de uso:
console.log(invertirPalabras("Hola como estas")); // "estas como Hola"
console.log(invertirPalabras("JavaScript es divertido")); // "divertido es JavaScript"

// 10. Crea una funciÃ³n que calcule el factorial de un nÃºmero dado.
function factorial(numero){
    let factorial = numero
    for(i=numero-1;i>0;i--){
        factorial *=i
    }
    console.log(factorial)
}

factorial(5)