// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los nÃºmeros del 1 al 20.
let val = 1
while(val <= 20){
    console.log(val)
    val++
}

// 2. Crea un bucle que sume todos los nÃºmeros del 1 al 100 y muestre el resultado.
let suma  = 0
for(let i = 1; i<=100; i++){
    suma +=i
}
console.log(suma);

// 3. Crea un bucle que imprima todos los nÃºmeros pares entre 1 y 50.

for(let i = 1; i<=50; i++){
    let percent = i%2
    if(percent == 0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

let bucleNombres = ["mario", "brais", "flavia", "daniella", "balu", "oso"]

let tam = bucleNombres.length

for(i = 0; i<tam;i++){
    console.log(bucleNombres[i])
}

// 5. Escribe un bucle que cuente el nÃºmero de vocales en una cadena de texto.

let cadenaTexto = "Hola"
cadenaTexto = cadenaTexto.toLowerCase()
let vocales = 0
for(i=0;i<cadenaTexto.length;i++){
    if(cadenaTexto[i] == "a" || cadenaTexto[i] == "e" || cadenaTexto[i] == "i" || cadenaTexto[i] == "o" || cadenaTexto[i] == "u"){
        vocales++
    }
}

console.log("Cantidad de vocales: " + vocales)
// 6. Dado un array de nÃºmeros, usa un bucle para multiplicar todos los nÃºmeros y mostrar el producto.

let arrayNumeros = [1,2,3,4,5,6,7,8,9]

tam = arrayNumeros.length
i=0
let multiplicacion = 1

while(i < tam){
    multiplicacion *= arrayNumeros[i]
    i++
}
console.log(multiplicacion)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

for(i=1;i<=10;i++){
    console.log(5*i);
}
// 8. Usa un bucle para invertir una cadena de texto.

cadenaTexto = "Invertir cadena de texto"
cadenaTextoInv = []

for(i = cadenaTexto.length; i>=0; i--){
    cadenaTextoInv.push(cadenaTexto[i])
}

console.log("La cadena de texto normal es: " + cadenaTexto)
console.log("La cadena texto invertida es: " + cadenaTextoInv);
// 9. Usa un bucle para generar los primeros 10 nÃºmeros de la secuencia de Fibonacci.

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

for (let i = 0; i < 10; i++) {
    console.log(`F(${i}) = ${fibonacci(i)}`);
}

// 10. Dado un array de nÃºmeros, usa un bucle para crear un nuevo array que contenga solo los nÃºmeros mayores a 10.

let arrayN1 = [1,2,3,4,10,11,18,6,25,78,7]
let arrayN2 = []

tam = arrayN1.length

for(i=0;i<tam;i++){
    let valorN1 = arrayN1[i]
    if(valorN1 > 10){
        arrayN2.push(valorN1)
    }
}
console.log(arrayN1)
console.log(arrayN2)