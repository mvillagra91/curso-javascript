// 1. Captura una excepciÃ³n utilizando try-catch.

try {
    let result = 10 / 0
    console.log(result)
} catch (error) {
    console.log("Ha ocurrido un error:", error.message)
}

// 2. Captura una excepciÃ³n utilizando try-catch y finally.

try {
    let x = undefinedVariable
} catch (error) {
    console.log("Ha ocurrido un error:", error.message)
} finally {
    console.log("Este bloque de cÃ³digo siempre se ejecuta")
}

// 3. Lanza una excepciÃ³n genÃ©rica.

try {
    throw new Error("Error genÃ©rico")
} catch (error) {
    console.log("Se ha capturado un error:", error.message)
}

// 4. Crea una excepciÃ³n personalizada.

class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "CustomError"
    }
}

// 5. Lanza una excepciÃ³n personalizada.

try {
    throw new CustomError("Este es un error personalizado")
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

// 6. Lanza varias excepciones segÃºn una lÃ³gica definida.

function checkNumber(num) {
    if (num < 0) {
        throw new Error("el nÃºmero es negativo")
    } else if (num === 0) {
        throw new Error("El nÃºmero es cero")
    } else if (num > 100) {
        throw new Error("El nÃºmero es mayor que 100")
    }
    return "NÃºmero vÃ¡lido"
}

try {
    console.log(checkNumber(101))
} catch (error) {
    console.log("Error:", error.message)
}

// 7. Captura varias excepciones en un mismo try-catch.

try {
    // let num = -5
    let num = 5
    checkNumber(num)
    num.toUpperCase()
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de tipo:", error.message)
    } else {
        console.log("Error:", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.

let values = ["10.5", "abc", "20.2", "xyz"]
for (let value of values) {
    try {
        let floatValue = parseFloat(value)
        if (isNaN(floatValue)) {
            throw new Error(`"${value}" no es un nÃºmero vÃ¡lido`)
        }
        console.log(`Valor transformado: ${floatValue}`)
    } catch (error) {
        console.log("Error:", error.message)
    }
}

// 9. Crea una funciÃ³n que verifique si un objeto tiene una propiedad especÃ­fica y lance una excepciÃ³n personalizada.

function checkProperty(obj, property) {
    if (!obj.hasOwnProperty(property)) {
        throw new CustomError(`La propiedad "${property}" no se ha encontrado en el objeto`)
    }
    return obj[property]
}
try {
    let person = { name: "Brais", age: 37 }
    console.log(checkProperty(person, "name"))
    console.log(checkProperty(person, "address"))
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

// 10. Crea una funciÃ³n que realice reintentos en caso de error hasta un mÃ¡ximo de 10.

// Ejemplo de operaciÃ³n que falla de manera aleatoria
function unstableOperation() {
    if (Math.random() > 0.9) { // Genera un nÃºmero aleatorio entre 0 y 1 (Si no conoces "Math", el curso tiene una lecciÃ³n sobre mÃ³dulos)
        console.log("OperaciÃ³n correcta")
    } else {
        throw new Error("Error inesperado")
    }
}

function retryOperation() {
    const maxRetries = 10
    let attempts = 0
    let success = false

    while (attempts < maxRetries && !success) {
        try {
            unstableOperation()
            success = true
        } catch (error) {
            attempts++
            console.log(`Intento ${attempts} fallido: ${error.message}`)
        }
    }

    if (!success) {
        console.log("Se ha alcanzado el mÃ¡ximo nÃºmero de intentos. OperaciÃ³n fallida.")
    }
}

retryOperation(10)