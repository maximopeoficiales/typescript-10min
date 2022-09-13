// aveces tenemos funciones que posiblemente el valor le llegue null
function doSomething(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}

// en este caso podremos usar el postfix
function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}

// cual es la diferencia entre ! y ?
// si tu usas el postfix ? se ejecutara de igual manera y no reventara en error
liveDangerously();