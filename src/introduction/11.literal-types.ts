let literalType: "hello" = "hello";
// OK
literalType = "hello";
// ...
literalType = "howdy";



function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");


function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

// tambien se puede combinar con tipos no literales
interface Options {
    width: number;
}
function configure(x: Options | "auto") {
    // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");


// inferencia literal
const obj = { counter: 0 };
if (true) obj.counter = 1;