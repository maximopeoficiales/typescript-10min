const avengers: string[] = ["Spiderman", "Ironman", "Hulk"];

const showAvengers = ([spiderman, ironman, hulk]: any) => {
  console.log(spiderman, ironman, hulk);
};

showAvengers(avengers);

const [, , hulk]: string[] = avengers;
console.log(hulk);


// spread operator
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

const obj = {'key1': 'value1'};
const array = [...obj]; // TypeError: obj is not iterable