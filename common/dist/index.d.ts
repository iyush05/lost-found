import z from "zod";
export declare const signupInput: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEffects<z.ZodString, string, string>;
    hashedPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    hashedPassword: string;
}, {
    name: string;
    email: string;
    hashedPassword: string;
}>;
export type SignupInput = z.infer<typeof signupInput>;
