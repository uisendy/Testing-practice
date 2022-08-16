const stringLength = require("./StringLength.js");

describe("StringLength tests", () => {
  test("hibernateer should return String greater than 10", () => {
    expect(stringLength("hibernateer")).toBe(
      "string should be greater than 1 and less than 10 Charater"
    );
  });

  test("Hibernate should return 9", () => {
    expect(stringLength("hibernate")).toBe(9);
  });

  test("Hibernate String greater than 0", () => {
    expect(stringLength("")).toBe(
      "string should be greater than 1 and less than 10 Charater"
    );
  });
});
