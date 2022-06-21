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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index = require("./index");
describe("cp-refresh-jwt", () => {
    const payload = { a: 1, b: 2 };
    test("secrets is a JSON string", () => __awaiter(void 0, void 0, void 0, function* () {
        const secrets = { JWT_SECRET: "abcdef" };
        const jwt = yield jsonwebtoken_1.default.sign(payload, secrets.JWT_SECRET);
        const event = { jwt, secrets: JSON.stringify(secrets) };
        const response = yield index.handler(event);
        expect(typeof response.jwt).toBe("string");
        expect(response.jwt.length).toBeGreaterThan(0);
    }));
    test("refresh JWT expired in 5 minutes", () => __awaiter(void 0, void 0, void 0, function* () {
        const secrets = { JWT_SECRET: "abcdef" };
        const jwt = yield jsonwebtoken_1.default.sign(payload, secrets.JWT_SECRET);
        const event = { jwt, secrets };
        const response = yield index.handler(event);
        expect(typeof response.jwt).toBe("string");
        expect(response.jwt.length).toBeGreaterThan(0);
    }));
    test("refresh JWT with other expiration time", () => __awaiter(void 0, void 0, void 0, function* () {
        const secrets = { JWT_SECRET: "abcdef" };
        const jwt = yield jsonwebtoken_1.default.sign(payload, secrets.JWT_SECRET);
        const event = { jwt, secrets };
        const response = yield index.handler(event);
        expect(typeof response.jwt).toBe("string");
        expect(response.jwt.length).toBeGreaterThan(0);
    }));
});
//# sourceMappingURL=index.test.js.map