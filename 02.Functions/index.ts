//funcion clasica
function sum(a: number, b: number): number {
  return a + b;
}

//son tres parametros y el callback hace la operacion
function mathOperation(callback: Function, a: number, b: number): number {
  return callback(a, b);
}
//el callback decide la operac
mathOperation((a: number, b: number) => a + b, 43, 3);

function execFuntion(name: string, hobby?: string, love: string = "dormir") {
  if (hobby) {
    return `Mi nombre es ${name} , mi hobby es : ${hobby} y me gusta ${love}`;
  }
  return `Mi nombre es ${name} y me gusta ${love}`;
}

console.log(execFuntion("Maximo", "Programar"));
console.log(execFuntion("Mayrin"));

const superhero = {
  name: "Hulk",
  smash() {
    setTimeout(() => {
      console.log(`${this.name} smashhh!!`);
    }, 3000);
  },
};
superhero.smash();
