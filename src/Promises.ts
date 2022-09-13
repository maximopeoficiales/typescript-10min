const retirarDinero = (retiro: number): Promise<number> => {
  let montoTotal: number = 1000;
  return new Promise((resolve, reject) => {
    if (montoTotal < retiro) {
      reject("El monto a retirar supera su total de dinero");
    } else {
      resolve(montoTotal - retiro);
    }
  });
};

retirarDinero(444).then(console.log).catch(console.log);


