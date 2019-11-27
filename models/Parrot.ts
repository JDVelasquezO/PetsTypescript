import { Pet } from "./Pet.js";

class Parrot extends Pet {
  private _featherColor: string;

  constructor(
    name: string,
    size: number,
    age: number,
    weigth: number,
    featherColor: string
  ) {
    super(name, size, age, weigth);
    this._featherColor = featherColor;
  }
}
