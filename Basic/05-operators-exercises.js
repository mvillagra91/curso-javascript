// 1. Crea una variable para cada operaciÃ³n aritmÃ©tica.
let suma = 3+4
let resta = 3-4
let multiplicacion = 3*4
let division = 3/4
let modulo = 3%4
let exponente = 3**4
let variable = 5
variable++
variable--
/**
 * 2. Crea una variable para cada tipo de operaciÃ³n de asignaciÃ³n, 
 * que haga uso de las variables utilizadas para las operaciones aritmÃ©ticas.
 */

let varAsignacion = 2
varAsignacion+=2
varAsignacion-=2
varAsignacion*=2
varAsignacion/=2
varAsignacion%=2
varAsignacion **=2

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparaciÃ³n.
let a = 3
let b = 2

console.log(a>b)
console.log(a<=b+1)
console.log(a-1 == b)
console.log(a != b)
console.log(a-3 == 0)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparaciÃ³n.
console.log(a<b)
console.log(a<=b)
console.log(a-1 == b+a)
console.log(a != b+1)
console.log(a == 0)
// 5. Utiliza el operador lÃ³gico and.
console.log(a>b && a == b+1)

// 6. Utiliza el operador lÃ³gico or.
console.log(a == 3 || b == 2)

// 7. Combina ambos operadores lÃ³gicos.
console.log(a > 1 || b>1 && a+1 == 4)

// 8. AÃ±ade alguna negaciÃ³n.
console.log(!(a>1))

// 9. Utiliza el operador ternario.
const isFlaming = true
isFlaming ? console.log("Se esta prendiendo todo"): console.log("No existe fuego")

// 10. Combina operadores aritmÃ©ticos, de comparÃ¡ciÃ³n y lÃ³gicas.
let a1 = 15
let b1 = 10

console.log(a1*b1 == a1+b1 || a1**b1 > b1*a1)

console.log((false || true));