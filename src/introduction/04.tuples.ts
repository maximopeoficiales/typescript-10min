// tuplas
// Declare a tuple type
let x: [string, number] = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
// OK
console.log(x[0].substring(1)); 
// ERROR
console.log(x[1].substring(1));
