global.window = {};
require("./scripts/random");

describe("library testers", () => {
  test("randomBoolean", () => {
    let count = 0;
    heads = 0;
    for (let i = 0; i < 1000; i++) {
      heads += window.cp.Random.boolean() ? 1 : 0;
      count++;
    }
    console.log(heads, count);
    expect(Math.abs(heads / count - 0.5)).toBeLessThan(0.25);
  });
});
