const Manager = require("../lib/Manager");

test("should populate with the office number they work in", () => {
  const manager = new Manager("Kelly", 2, "email@email", 3);
  expect(manager.officeNumber).toBe(3);
});