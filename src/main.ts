import Address from "./entity/address";
import Customer from "./entity/customer";
import OrderItem from "./entity/orderItem";

let customer = new Customer("1", "John Doe");
const address = new Address("Main Street", 123, "Springfield", "12345");
customer.setAddress(address);
customer.activate();

const item1 = new OrderItem("1", "Laptop", 1000);
const item2 = new OrderItem("2", "Mouse", 20);
