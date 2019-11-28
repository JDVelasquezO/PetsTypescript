import { Pet } from "./Pet.js";

export class Fish extends Pet {
  private _type: string;

  constructor(
    name: string,
    size: number,
    age: number,
    weigth: number,
    type: string
  ) {
    super(name, size, age, weigth);
    this._type = type;
  }
}
