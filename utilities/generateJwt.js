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
Object.defineProperty(exports, "__esModule", { value: true });
const { handler } = require("../lambda/cp-generate-jwt/index");
const payload = {
    teacherEmail: "rogerjaffe@gmail.com",
    studentId: "394129",
    lastName: "Aris",
    firstName: "Joseph",
    period: "1",
    className: "AP Computer Science Principles",
};
const secrets = { JWT_SECRET: "uLS67oQy0rWlpiZ63VKf" };
const f = () => __awaiter(void 0, void 0, void 0, function* () {
    const output = yield handler({ secrets, payload });
    console.log(output.jwt);
});
f();
//# sourceMappingURL=generateJwt.js.map