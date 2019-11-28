import { Pet } from "./Pet.js";

export class Dog extends Pet {
  private _race: string;

  constructor(
    name: string,
    size: number,
    age: number,
    weigth: number,
    race: string
  ) {
    super(name, size, age, weigth);
    this._race = race;
  }
}
