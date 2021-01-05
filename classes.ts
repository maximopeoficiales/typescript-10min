//patron builder
class Torta {
  public delicacy: boolean = false;
  public taste: string = "";
  public chantilli: boolean = false;
  public otherIngredients: string[] = [""];
  /* metodos */
  setDelicacy(): Torta {
    this.delicacy = true;
    return this;
  }
  setChantilli(): Torta {
    this.chantilli = true;
    return this;
  }
  setTaste(taste: string): Torta {
    this.taste = taste;
    return this;
  }
  setOtherIngredients(ingredients: string[]): Torta {
    this.otherIngredients = ingredients;
    return this;
  }
  build(): Torta {
    return this;
  }
}
//con este patron podemos agregar propieades custom
const pedido: Torta = new Torta();
pedido
  .setChantilli()
  .setDelicacy()
  .setTaste("Chocolate")
  .setOtherIngredients(["fruits", "cookies"])
  .build();

console.log(pedido);

class Avenger {
  constructor(
    public name: string,
    public poder: string = "Superfuerza",
    public sex?: string
  ) {}
}

const ironMan = new Avenger("Tony Stark", "Ser Millonario", "M");
console.log(ironMan);


