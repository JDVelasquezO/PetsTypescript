import { Pet } from "./Pet.js";

export class Fish extends Pet {
  private _typeFish: string;

  constructor(
    name: string,
    size: number,
    age: number,
    weigth: number,
    typeFish: string
  ) {
    super(name, size, age, weigth, "Pez");
    this._typeFish = typeFish;
  }

  public set setTypeFish(v: string) {
    this._typeFish = v;
  }

  public get getTypeFish(): string {
    return this._typeFish;
  }
}
