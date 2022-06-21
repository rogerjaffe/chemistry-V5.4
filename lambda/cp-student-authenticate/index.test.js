"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe("cp-student-authenticate", () => {
    const index = require("./index");
    const studentListJSON = '[{"studentId":"394129","period":"1","lastName":"Aris","firstName":"Joseph","className":"APCS Principles","salt":"_42zoU8vi4uxth9jdKI6k","passwordHash":"4f7f3ac2327f5e1aff301199cedec80a9cc049890d648d417dffbf2d1a170224365ed5ef17a24e9d08a6986a976bb31496d9da56f1c28f981f77c80830496af4"}]';
    const secrets = { PEPPER: "ZjWveyaVwYEBoaQnzawt" };
    test("student not found", () => __awaiter(void 0, void 0, void 0, function* () {
        const password = "incorrectPassword";
        const studentId = "12345";
        yield expect(index.handler({ studentListJSON, secrets, studentId, password })).rejects.toThrow(new Error("StudentNotFoundError"));
    }));
    test("authentication error", () => __awaiter(void 0, void 0, void 0, function* () {
        const password = "jeV862fiv-123";
        const studentId = "394129";
        yield expect(index.handler({ studentListJSON, secrets, studentId, password })).rejects.toThrow(new Error("AuthenticationError"));
    }));
    test("valid login", () => __awaiter(void 0, void 0, void 0, function* () {
        const password = "jeV862fiv";
        const studentId = "394129";
        const { student } = yield index.handler({
            studentListJSON,
            secrets,
            studentId,
            password,
        });
        expect(student.lastName).toEqual("Aris");
    }));
});
//# sourceMappingURL=index.test.js.map