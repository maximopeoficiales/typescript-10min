
let looselyTyped: any = 4;
// En Cualquiera de las dos formas el compilador no marca como error
looselyTyped.ifItExists();
looselyTyped.toFixed();

// Otra razon por la cual no es recomendable usar any es lo siguiente
let looselyTyped2: any = {};
let d = looselyTyped2.a.b.c.d;
