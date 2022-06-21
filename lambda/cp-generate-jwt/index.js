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
/**
 * Generates a JWT using the JWT_SECRET
 * @param event Shape: {
 *   secrets,
 *   EXPIRE_SECONDS,
 *   payload: {object}
 * }
 * @returns {Promise<{jwt: string}>}
 */
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const FIVE_MINUTES = 300; // seconds
    const expiresIn = (_a = event.EXPIRE_SECONDS) !== null && _a !== void 0 ? _a : FIVE_MINUTES;
    try {
        const jwt = yield jsonwebtoken_1.default.sign(event.payload, event.secrets.JWT_SECRET, {
            expiresIn,
        });
        return { jwt };
    }
    catch (err) {
        throw new Error("GenerateJWTError: " + err.message);
    }
});
//# sourceMappingURL=index.js.map