describe("cp-student-authenticate", () => {
  const index = require("./index");
  const studentListJSON =
    '[{"studentId":"394129","period":"1","lastName":"Aris","firstName":"Joseph","className":"APCS Principles","salt":"_42zoU8vi4uxth9jdKI6k","passwordHash":"4f7f3ac2327f5e1aff301199cedec80a9cc049890d648d417dffbf2d1a170224365ed5ef17a24e9d08a6986a976bb31496d9da56f1c28f981f77c80830496af4"}]';
  const secrets = { PEPPER: "ZjWveyaVwYEBoaQnzawt" };

  test("student not found", async () => {
    const password = "incorrectPassword";
    const studentId = "12345";
    await expect(
      index.handler({ studentListJSON, secrets, studentId, password })
    ).rejects.toThrow(new Error("StudentNotFoundError"));
  });

  test("authentication error", async () => {
    const password = "jeV862fiv-123";
    const studentId = "394129";
    await expect(
      index.handler({ studentListJSON, secrets, studentId, password })
    ).rejects.toThrow(new Error("AuthenticationError"));
  });

  test("valid login", async () => {
    const password = "jeV862fiv";
    const studentId = "394129";
    const { student } = await index.handler({
      studentListJSON,
      secrets,
      studentId,
      password,
    });
    expect(student.lastName).toEqual("Aris");
  });
});
