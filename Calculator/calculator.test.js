const calculatorOperations = require("./Calculator.js");

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(calculatorOperations.sum(1, 2)).toBe(3);
  });

  test("subtracting 10 - 5 should return 5", () => {
    expect(calculatorOperations.subtract(10, 5)).toBe(5);
  });

  test("Multiplying 20 * 5 should return 100", () => {
    expect(calculatorOperations.multiply(20, 5)).toBe(100);
  });

  test("Dividing 20 / 5 should return 4", () => {
    expect(calculatorOperations.divide(20, 5)).toBe(4);
  });
});
