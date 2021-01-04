//funcion clasica
function sum(a, b) {
    return a + b;
}
//son tres parametros y el callback hace la operacion
function mathOperation(callback, a, b) {
    return callback(a, b);
}
//el callback decide la operac
mathOperation(function (a, b) { return a + b; }, 43, 3);
function execFuntion(name, hobby, love) {
    if (love === void 0) { love = "dormir"; }
    if (hobby) {
        return "Mi nombre es " + name + " , mi hobby es : " + hobby + " y me gusta " + love;
    }
    return "Mi nombre es " + name + " y me gusta " + love;
}
console.log(execFuntion("Maximo", "Programar"));
console.log(execFuntion("Mayrin"));
