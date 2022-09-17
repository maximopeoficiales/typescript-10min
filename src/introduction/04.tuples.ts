// tuplas en js

// https://www.youtube.com/watch?v=vImkxi6wCN0

// Un valor inmutable es aquel cuyo contenido no se puede cambiar sin crear un valor completamente nuevo . En JavaScript, los valores primitivos son inmutables: una vez que se crea un valor primitivo, no se puede cambiar, aunque se puede reasignar otro valor a la variable que lo contiene.

// Declare a tuple type
let x: [string, number] = ["hello", 10]; // OK
let x1: [string, number] = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
x[0]=1;
// OK
console.log(x[0].substring(1)); 
// ERROR
console.log(x[1].substring(1));

// console.log(x===x1);//false
