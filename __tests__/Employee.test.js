const Employee = require("../lib/Employee");

test("should create a name", () => {
  const employee = new Employee("Kelly", 2, "email@email");
  expect(employee.name).toBe("Kelly");
});
