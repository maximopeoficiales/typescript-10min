interface Animal {
    name: string;
    color: string;
    edad?: number;
}

const dog: Animal = {
    name: "Chato",
    color: "Marron",
    edad: 44,
};

interface OnInit {
    ngOnInit(): void;
}

class MyComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    
}

const showAnimal = (animal: Animal) => {
    console.log(animal.name, animal.color, animal.edad);
};

showAnimal(dog);
