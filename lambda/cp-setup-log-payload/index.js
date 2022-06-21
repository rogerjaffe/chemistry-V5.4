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
const getUnixTime_1 = __importDefault(require("date-fns/getUnixTime"));
const addYears_1 = __importDefault(require("date-fns/addYears"));
const nanoid_1 = require("nanoid");
/**
 * Set up the log payload for the AWS step function
 * @param event Shape: {
 *   student: {teacherEmail, studentId, lastName, firstName, period, className},
 *   jwt
 *   seq
 *   isCorrect
 * }
 * @returns {Promise<{jwt: string}>}
 */
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    return {
        seq: event.seq,
        emailToken: event.student.teacherEmail + ":" + (0, nanoid_1.nanoid)(20),
        studentId: event.student.studentId,
        isCorrect: event.isCorrect,
        timestamp: (0, getUnixTime_1.default)(now) + "",
        expiration: (0, getUnixTime_1.default)((0, addYears_1.default)(now, 1)) + "",
        jwt: event.jwt,
    };
});
//# sourceMappingURL=index.js.map