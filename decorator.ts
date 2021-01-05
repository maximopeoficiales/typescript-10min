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
console.log(nissan.SelfDrivinf);
console.log(nissan.wheels);

