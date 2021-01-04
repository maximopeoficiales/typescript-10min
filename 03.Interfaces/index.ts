interface IAnimal {
  name: string;
  color: string;
  edad: number;
}

const dog: IAnimal = {
  name: "Chato",
  color: "Marron",
  edad: 44,
};

interface OnInit {
  ngOnInit(): void;
}
class MyComponet implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
