const imprimirConsola = (constructorCLase: Function) =>
  console.log(constructorCLase);

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
@imprimirConsola
class Xmen {
  constructor(public name: string, public clave: string) {}
  imprimir() {
    console.log(`MI NOMBRE ES ${this.name} mi clave es : ${this.clave}`);
  }
}

const xmen = new Xmen("Wolverine", "asdfad");
console.log(xmen);
