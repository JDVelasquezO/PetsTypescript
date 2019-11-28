export abstract class Pet {
  private _name: string;
  private _size: number;
  private _age: number;
  private _weigth: number;
  private _type: string;

  constructor(
    name: string,
    size: number,
    age: number,
    weigth: number,
    type: string
  ) {
    this._name = name;
    this._size = size;
    this._age = age;
    this._weigth = weigth;
    this._type = type;
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

  public set setType(v: string) {
    this._type = v;
  }

  public get getName(): string {
    return this._name;
  }

  public get getSize(): number {
    return this._size;
  }

  public get getAge(): number {
    return this._age;
  }

  public get getWeigth(): number {
    return this._weigth;
  }

  public get getType(): string {
    return this._type;
  }
}
