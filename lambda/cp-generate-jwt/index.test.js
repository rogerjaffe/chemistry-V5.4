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
const index = require("./index");
describe("cp-generate-jwt", () => {
    const payload = { a: 1, b: 2 };
    test("generate JWT expired in 5 minutes", () => __awaiter(void 0, void 0, void 0, function* () {
        const event = { secrets: { JWT_SECRET: "abcdef" }, payload };
        const response = yield index.handler(event);
        expect(typeof response.jwt).toBe("string");
        expect(response.jwt.length).toBeGreaterThan(0);
    }));
    test("generate JWT with other expiration time", () => __awaiter(void 0, void 0, void 0, function* () {
        const event = {
            secrets: { JWT_SECRET: "abcdef" },
            payload,
            EXPIRE_SECONDS: 1000,
        };
        const response = yield index.handler(event);
        expect(typeof response.jwt).toBe("string");
        expect(response.jwt.length).toBeGreaterThan(0);
    }));
});
//# sourceMappingURL=index.test.js.map