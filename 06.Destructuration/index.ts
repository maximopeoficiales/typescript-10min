const avengers: string[] = ["Spiderman", "Ironman", "Hulk"];

const showAvengers = ([spiderman, ironman, hulk]: any) => {
  console.log(spiderman, ironman, hulk);
};

showAvengers(avengers);

const [, , hulk] = avengers;
console.log(hulk);
