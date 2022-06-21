const index = require("./index");

describe("cp-generate-jwt", () => {
  const payload = { a: 1, b: 2 };

  test("generate JWT expired in 5 minutes", async () => {
    const event = { secrets: { JWT_SECRET: "abcdef" }, payload };
    const response = await index.handler(event);
    expect(typeof response.jwt).toBe("string");
    expect(response.jwt.length).toBeGreaterThan(0);
  });

  test("generate JWT with other expiration time", async () => {
    const event = {
      secrets: { JWT_SECRET: "abcdef" },
      payload,
      EXPIRE_SECONDS: 1000,
    };
    const response = await index.handler(event);
    expect(typeof response.jwt).toBe("string");
    expect(response.jwt.length).toBeGreaterThan(0);
  });
});
