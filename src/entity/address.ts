export default class Address {
  _street: string = "";
  _number: number = 0;
  _city: string = "";
  _zipCode: string = "";

  constructor(street: string, number: number, city: string, zipCode: string) {
    this._street = street;
    this._number = number;
    this._city = city;
    this._zipCode = zipCode;
    this.validate();
  }

  validate() {
    if (this._street.length == 0) {
      throw new Error("Street is required");
    }

    if (this._number === 0) {
      throw new Error("Number is required");
    }

    if (this._city.length == 0) {
      throw new Error("City is required");
    }

    if (this._zipCode.length == 0) {
      throw new Error("Zip code is required");
    }
  }
}
