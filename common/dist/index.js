"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email().refine((val) => val.endsWith('@akgec.ac.in'), {
        message: "Email must be from the 'akgec.ac.in' domain",
    }),
    hashedPassword: zod_1.default.string(),
});
