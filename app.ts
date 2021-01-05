(() => {
  // Uso de Let y Const
  let nombre: string = "Ricardo Tapia";
  let edad: number = 23;

  let PERSONAJE = {
    nombre,
    edad,
  };

  // Cree una interfaz que sirva para validar el siguiente objeto
  interface DC {
    nombre: string;
    artesMarciales: string[];
  }
  let batman: DC = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"],
  };

  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble = (a: number, b: number): number => (a + b) * 2;

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  const getAvenger = (
    nombre: string,
    poder?: string,
    arma: string = "arco"
  ) => {
    if (poder) {
      return nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    } else {
      return nombre + " tiene un " + poder;
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo {
    constructor(public base: number, public altura: number) {}
    getArea(): number {
      return this.base * this.altura;
    }
  }

  const rectangulo = new Rectangulo(4, 33);
  console.log(rectangulo.getArea());
  console.log(getAvenger("Batman","Ser rico"));
})();
