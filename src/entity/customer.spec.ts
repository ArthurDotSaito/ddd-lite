import Address from "./address";
import Customer from "./customer";

describe("customer unit tests", () => {
  it("Should thrown an error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John Doe");
    }).toThrowError("Id is required");
  });

  it("Should thrown an error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("Should change name succesfully", () => {
    let customer = new Customer("123", "John");
    customer.changeName("Doe");

    expect(customer.name).toBe("Doe");
  });

  it("Should activate a customer", () => {
    const customer = new Customer("123", "John");
    const address = new Address("Main Street", 123, "Springfield", "12345");
    customer.setAddress(address);

    customer.activate();

    expect(customer.isActive).toBe(true);
  });

  it("Should thrown a error when calls activate with undefined address", () => {
    expect(() => {
      const customer = new Customer("123", "John");
      customer.activate();
    }).toThrowError("Address is required to activate customer");
  });

  it("Should deactivate a customer", () => {
    const customer = new Customer("123", "John");

    customer.deactivate();

    expect(customer.isActive).toBe(false);
  });
});
