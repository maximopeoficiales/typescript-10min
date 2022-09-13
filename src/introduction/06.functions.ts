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
  if (hobby) return `Mi nombre es ${name} , mi hobby es : ${hobby} y me gusta ${love}`;
  return `Mi nombre es ${name} y me gusta ${love}`;
}

console.log(execFuntion("Maximo", "Programar"));
console.log(execFuntion("Mayrin"));


function printCoord2(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 3, y: 7 });


function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  // console.log(obj.last.toUpperCase());
  // Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}


const superhero = {
  name: "Hulk",
  smash() {
    setTimeout(() => {
      console.log(`${this.name} smashhh!!`);
    }, 3000);
  },
};
superhero.smash();


function warnUser(): void {
  console.warn("This is my warning message");
}


// son funciones que no tiene un punto final
function infiniteLoop(): never {
  while (true) { }
}

const sayHello2: Function = (name: string): string => `Hello ${name}`;