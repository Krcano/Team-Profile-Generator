const Engineer = require("../lib/Engineer");

test("should show the github username", () => {
  const engineer = new Engineer("Kelly", 2, "email@email", "Krcano");
  expect(engineer.github).toBe("Krcano");
});