//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
//https://www.typescriptlang.org/docs/handbook/basic-types.html
let framework: string = "REACT";
const isProducton: boolean = true;
const PORT: number = 3000;
//primer forma
let list: number[] = [1, 2, 3];
console.log(list);
//segunda forma
const styles: Array<Boolean> = [false, true, true];
const sayHello: Function = (name: string): string => `Hello ${name}`;
console.log(sayHello("Maximo Junior"));

//  tuples cannot be mutated
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK // Error
// Initialize it incorrectly
/* x = [10, "hello"]; */

console.log(x);
//Enum
enum Color {
  Red,
  Green = 3,
  Blue,
}
let c: Color = Color.Green;
console.log(c); //3

//hay momentos donde no sabemos el tipo de dato
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;

//En algunas situaciones, no todos los tipos de información están disponibles o su declaración requeriría un esfuerzo inadecuado.
const getValue: Function = (key: string): any => true;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");
console.log(str);

let strictlyTyped: any = 4;
strictlyTyped.toString(); //al ser de tipo any o uknown no da ayuda

//void que no retornan nada
function warnUser(): void {
  console.warn("This is my warning message");
}
//explicacion : https://www.youtube.com/watch?v=fUbx8bD4aFQ
//cada uno tiene su propio valo de vacio
let unusable: void = undefined; //indefinido ya esta por hecho si este no tiene valor
let unusable2: null = null; //nada este valo es intencional

const setName: Function = (name: string = "Pepito") => {
  console.log(name);
};

setName(undefined);

//el tipo de dato never se usa para funciones o varibles que no deben ocurrir
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

//si declaro una funcion
declare function create(o: object | null): void;

create({ prop: 3 });
create(null); //no se puede agregar un string solo objetos //habra momentos donde tu sabras que tipo de dato es aunque venga de un API
/* create("string"); */ let someValue: any = "this is a string";
//entonces hacemos un asercion sabiando que es string
let strLength: number = (someValue as string).length;
console.log(strLength);

//puedo declarar un tipo de dato
type WindowStates = "open" | "closed" | "minimized";
let state: WindowStates = "closed";
console.log(state);

//tambien puedo hacer una funcion que pueda tener como parametro un string o array de tipo string
function getLength(obj: string | string[]) {
  return obj.length;
}
