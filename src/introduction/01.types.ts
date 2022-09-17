// https://www.typescriptlang.org/docs/handbook/basic-types.html

// string
let name: string = 'Fernando';
name = 'Melissa';

// boolean
const isValid: boolean = true;

// number bigint
const age: number = 35;
let big: bigint = 100n;
/* El BigInt tipo de datos tiene como objetivo permitir que los programadores de JavaScript representen valores enteros más grandes que el rango admitido por el Numbertipo de datos. La capacidad de representar números enteros con precisión arbitraria es especialmente importante cuando se realizan operaciones matemáticas con números enteros grandes. Con BigInt, el desbordamiento de enteros ya no será un problema. */

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
expresiones ${1 + 1}
números: ${age}
booleanos: ${isValid}
`
name = 123;
name = true;

// array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
