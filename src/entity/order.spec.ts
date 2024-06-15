import Order from "./order";

describe("Order unit tests", () => {
  it("Should thrown an error when id is empty", () => {
    expect(() => new Order("", "123", [])).toThrowError("Id is required");
  });

  it("Should thrown an error when customer id is empty", () => {
    expect(() => new Order("123", "", [])).toThrowError("CustomerId is required");
  });

  it("Should thrown an error when item quantity is zero", () => {
    expect(() => new Order("123", "123", [])).toThrowError("Items are required");
  });
});
