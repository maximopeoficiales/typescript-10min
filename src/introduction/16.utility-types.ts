// https://www.typescriptlang.org/docs/handbook/utility-types.html
// Pick
// Omit
// MapString


interface Animal4 {
  name: string;
  especie: string;
}

const newAnimal: Partial<Animal4> = {

}

const newAnimal2: Omit<Animal4,"name"> = {
  especie:"lajksdjlasdk"
}
 
const newAnimal3: Pick<Animal4, "name"> = {
  name:"alskjdlaskd",

}

newAnimal2.especie;
