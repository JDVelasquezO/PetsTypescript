import { Pet } from "./Pet.js";

export class Parrot extends Pet {
  private _featherColor: string;

  constructor(
    name: string,
    size: number,
    age: number,
    weigth: number,
    featherColor: string
  ) {
    super(name, size, age, weigth, "Loro");
    this._featherColor = featherColor;
  }

  public set setFeatherColor(v: string) {
    this._featherColor = v;
  }

  public get getFeatherColor(): string {
    return this._featherColor;
  }
}
