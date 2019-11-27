export class Pet {
  private _name: string;
  private _size: number;
  private _age: number;
  private _weigth: number;

  constructor(name: string, size: number, age: number, weigth: number) {
    this._name = name;
    this._size = size;
    this._age = age;
    this._weigth = weigth;
  }

  public set setName(v: string) {
    this._name = v;
  }

  public set setSize(v: number) {
    this._size = v;
  }

  public set setAge(v: number) {
    this._age = v;
  }

  public set setWeigth(v: number) {
    this._weigth = v;
  }
}
