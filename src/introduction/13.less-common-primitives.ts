// Primitivas menos comunes
// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

/* El BigInt tipo de datos tiene como objetivo permitir que los programadores de JavaScript representen valores enteros más grandes que el rango admitido por el Numbertipo de datos. La capacidad de representar números enteros con precisión arbitraria es especialmente importante cuando se realizan operaciones matemáticas con números enteros grandes. Con BigInt, el desbordamiento de enteros ya no será un problema. */


// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

// El tipo Symbol nos permite obtener valores que no pueden volver a ser creados, es decir, son identificadores únicos e inmutables.

const firstName = Symbol("name");
const secondName = Symbol("name");

// if (firstName === secondName) {

// }


const createObject = () => {
  let obj: any = {};
  let id = Symbol("identificador");
  obj[id] = 0;
  return {
    setId(valor: any) {
      obj[id] = valor;
    },
    getId() {
      return obj[id];
    },
    get() {
      return obj;
    }
  }
}
let newObject = createObject();
let object = newObject.get();
console.log(object);
newObject.setId(32);
let t = newObject.getId();
console.log(t);
console.log(object);

