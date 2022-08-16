const capitalizeWord = require("./CapatalizeWord.js");

describe("Capitalize a Word", () => {
  test("capital should return Capital", () => {
    expect(capitalizeWord("capital")).toBe("Capital");
  });

  test("capital should return Capital", () => {
    expect(capitalizeWord(capital)).toBe("Capital");
  });
});
