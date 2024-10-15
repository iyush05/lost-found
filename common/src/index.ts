import z from "zod";

export const signupInput = z.object({
    name: z.string(),
    email: z.string().refine((val) => val.endsWith('@akgec.ac.in'), {
        message: "Email must be from the 'akgec.ac.in' domain",
    }),
    hashedPassword: z.string(),

})

export type SignupInput = z.infer<typeof signupInput>