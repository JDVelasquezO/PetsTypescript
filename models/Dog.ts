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
    super(name, size, age, weigth, "Perro");
    this._race = race;
  }

  public set setRace(v: string) {
    this._race = v;
  }

  public get getRace(): string {
    return this._race;
  }
}
