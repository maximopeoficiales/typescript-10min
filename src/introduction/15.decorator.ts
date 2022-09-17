//un decarador es la manera de agregar propiedades a una clase mediante funciones
//agregar la propiedad de autoconduccion
function SelfDriving(contructorFunctions: Function) {
  contructorFunctions.prototype.SelfDrivinf = true;
}
//funcion para agregar ruedas
function Wheels(numberOfWheels: number) {
  return function (constructor: Function) {
    constructor.prototype.wheels = numberOfWheels;
  };
}

//agregar los decoradores
@SelfDriving
@Wheels(4)
class Car {
  private brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

const nissan: Car = new Car("Toyota");
// console.log(nissan.SelfDrivinf);
// console.log(nissan.wheels);



const imprimirConsola = (constructorCLase: Function) =>
  console.log(constructorCLase);

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    //   console.log({target})
      return {

        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
        
      }
    }   
}

// @sealed
@imprimirConsola
class Xmen {
  constructor(public name: string, public clave: string) { }
  imprimir() {
    console.log(`MI NOMBRE ES ${this.name} mi clave es : ${this.clave}`);
  }
}

const xmen = new Xmen("Wolverine", "asdfad");
console.log(xmen);
