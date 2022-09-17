// https://www.typescriptlang.org/docs/handbook/basic-types.html

// string
let name: string = 'Fernando';
name = 'Melissa';

// boolean
const isValid: boolean = true;

// number bigint
const age: number = 35;

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
