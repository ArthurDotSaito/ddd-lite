export default class Product {
  private _id: string;
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    if (!id) throw new Error("Id is required");
    this._id = id;
    this._name = name;
    this._price = price;

    this.validate();
  }

  validate(): boolean {
    if (this._id.length === 0) throw new Error("Id is required");
    if (this._name.length === 0) throw new Error("Name is required");
    if (this._price < 0) throw new Error("Product should have a price greater than zero");

    return true;
  }

  getName(): string {
    return this._name;
  }

  getPrice(): number {
    return this._price;
  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  changePrice(price: number): void {
    this._price = price;
    this.validate();
  }
}
