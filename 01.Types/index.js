//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
//https://www.typescriptlang.org/docs/handbook/basic-types.html
var framework = "REACT";
var isProducton = true;
var PORT = 3000;
//primer forma
var list = [1, 2, 3];
console.log(list);
//segunda forma
var styles = [false, true, true];
var sayHello = function (name) { return "Hello " + name; };
console.log(sayHello("Maximo Junior"));
//  tuples cannot be mutated
var x;
// Initialize it
x = ["hello", 10]; // OK // Error
// Initialize it incorrectly
/* x = [10, "hello"]; */
console.log(x);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); //3
//hay momentos donde no sabemos el tipo de dato
var notSure = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;
//En algunas situaciones, no todos los tipos de información están disponibles o su declaración requeriría un esfuerzo inadecuado.
var getValue = function (key) { return true; };
// OK, return value of 'getValue' is not checked
var str = getValue("myString");
console.log(str);
var strictlyTyped = 4;
strictlyTyped.toString(); //al ser de tipo any o uknown no da ayuda
//void que no retornan nada
function warnUser() {
    console.warn("This is my warning message");
}
//explicacion : https://www.youtube.com/watch?v=fUbx8bD4aFQ
//cada uno tiene su propio valo de vacio
var unusable = undefined; //indefinido ya esta por hecho si este no tiene valor
var unusable2 = null; //nada este valo es intencional
var setName = function (name) {
    if (name === void 0) { name = "Pepito"; }
    console.log(name);
};
setName(undefined);
//el tipo de dato never se usa para funciones o varibles que no deben ocurrir
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
create({ prop: 3 });
create(null); //no se puede agregar un string solo objetos //habra momentos donde tu sabras que tipo de dato es aunque venga de un API
/* create("string"); */ var someValue = "this is a string";
//entonces hacemos un asercion sabiando que es string
var strLength = someValue.length;
console.log(strLength);
var state = "closed";
console.log(state);
//tambien puedo hacer una funcion que pueda tener como parametro un string o array de tipo string
function getLength(obj) {
    return obj.length;
}
