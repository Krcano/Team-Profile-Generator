const Intern = require("../lib/Intern");

test("should populate with the school name", () => {
  const intern = new Intern("Kelly", 2, "email@email", "UCR");
  expect(intern.school).toBe("UCR");
});