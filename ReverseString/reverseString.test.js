const reverseString = require("./ReverseString.js");

describe("Reverse String tests", () => {
  test("deniable should return elbained", () => {
    expect(reverseString("deniable")).toBe("elbained");
  });

  test("Hello should return olleh", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("CONGRATS should return STARGNOC", () => {
    expect(reverseString("CONGRATS")).toBe("STARGNOC");
  });
});
