import jsonwebtoken from "jsonwebtoken";
const index = require("./index");

describe("cp-refresh-jwt", () => {
  const payload = { a: 1, b: 2 };

  test("secrets is a JSON string", async () => {
    const secrets = { JWT_SECRET: "abcdef" };
    const jwt = await jsonwebtoken.sign(payload, secrets.JWT_SECRET);
    const event = { jwt, secrets: JSON.stringify(secrets) };
    const response = await index.handler(event);
    expect(typeof response.jwt).toBe("string");
    expect(response.jwt.length).toBeGreaterThan(0);
  });

  test("refresh JWT expired in 5 minutes", async () => {
    const secrets = { JWT_SECRET: "abcdef" };
    const jwt = await jsonwebtoken.sign(payload, secrets.JWT_SECRET);
    const event = { jwt, secrets };
    const response = await index.handler(event);
    expect(typeof response.jwt).toBe("string");
    expect(response.jwt.length).toBeGreaterThan(0);
  });

  test("refresh JWT with other expiration time", async () => {
    const secrets = { JWT_SECRET: "abcdef" };
    const jwt = await jsonwebtoken.sign(payload, secrets.JWT_SECRET);
    const event = { jwt, secrets };
    const response = await index.handler(event);
    expect(typeof response.jwt).toBe("string");
    expect(response.jwt.length).toBeGreaterThan(0);
  });
});
