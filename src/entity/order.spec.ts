import Order from "./order";
import OrderItem from "./orderItem";

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

  it("Should calculate total", () => {
    const item_01 = new OrderItem("i1", "item_01", 10);
    const item_02 = new OrderItem("i2", "item_02", 10);
    const expectedTotal = item_01._price + item_02._price;  
    const order = new Order("o1", "c1", [item_01, item_02]);

    const total = order.total();

    expect(total).toBe(expectedTotal);
  });
});
