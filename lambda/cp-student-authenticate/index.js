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
const sha512_1 = __importDefault(require("crypto-js/sha512"));
/**
 * Refresh a JWT using the JWT_SECRET
 * @param event Shape: {
 *   PEPPER, (from AWS Secrets Manager)
 *   studentListJSON, (from DynamoDB teachers table)
 *   studentId,
 *   password
 * }
 * @returns {Promise<{jwt: string}>}
 */
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { secrets, studentListJSON, studentId, password } = event;
    const studentList = JSON.parse(studentListJSON);
    const student = studentList.find((s) => s.studentId === studentId);
    if (!student) {
        throw new Error("StudentNotFoundError");
    }
    const hash = (0, sha512_1.default)(student.salt + password + secrets.PEPPER).toString();
    if (hash !== student.passwordHash) {
        throw new Error("AuthenticationError");
    }
    else {
        return { student };
    }
});
//# sourceMappingURL=index.js.map