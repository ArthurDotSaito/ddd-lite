class Customer {
  _id: string;
  _name: string = "";
  _email: string = "";
  _active: boolean = false;

  constructor(id: string, name: string, email: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this.validate();
  }

  validate() {
    if (this._id.length == 0) {
      throw new Error("Id is required");
    }

    if (this._name.length == 0) {
      throw new Error("Name is required");
    }

    if (this._email.length == 0) {
      throw new Error("Email is required");
    }
  }

  changeName(name: string) {
    this._name = name;
  }

  activate() {
    if (this._email.length == 0) {
      throw new Error("Email is required to activate customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}
