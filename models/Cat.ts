import { Pet } from "./Pet.js";

export class Cat extends Pet {
  private _eyesColor: string;

  constructor(
    name: string,
    size: number,
    age: number,
    weigth: number,
    eyesColor: string
  ) {
    super(name, size, age, weigth, "Gato");
    this._eyesColor = eyesColor;
  }

  public set setEyesColor(v: string) {
    this._eyesColor = v;
  }

  public get getEyesColor(): string {
    return this._eyesColor;
  }
}
