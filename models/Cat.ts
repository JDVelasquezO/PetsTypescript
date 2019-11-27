import { Pet } from "./Pet.js";

class Cat extends Pet {
  private _eyesColor: string;

  constructor(
    name: string,
    size: number,
    age: number,
    weigth: number,
    eyesColor: string
  ) {
    super(name, size, age, weigth);
    this._eyesColor = eyesColor;
  }
}
