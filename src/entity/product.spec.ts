import Product from "./Product";

describe("Product unit tests", () => {
  it("Should thrown an error when id is empty", () => {
    expect(() => {
      let order = new Product("", "123", 100);
    }).toThrowError("Id is required");
  });

  it("Should thrown an error when name is empty", () => {
    expect(() => {
      let order = new Product("123", "", 100);
    }).toThrowError("Name is required");
  });
});
