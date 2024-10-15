import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from '@prisma/client/edge'
import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput, SignupInput } from '@iyush05/lostfound-app'


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();



userRouter.post('/signup', async(c) => {
    const body = await c.req.json();
    // const { success } = signupInput.safeParse(body);

    // if (!success) {
    //     c.status(400);
    //     return c.json({
    //         message: "Input not correct"
    //     })
    // }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.users.create({
            data: {
                name: body.name,
                email: body.email,
                hashedPassword: body.password,
            }
        })
        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET)
        return c.text(jwt)
    } catch(e) {
        c.status(411);
        return c.text('invalid')
    }

})

userRouter.post('/signin', async(c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.users.findFirst({
          where: {
            email: body.email,
            hashedPassword: body.password,
          }
        })
        if(!user) {
          c.status(403);
          return c.json({
            message: "Incorrect creds"
          })
        }
        const jwt = await sign({
          id: user.id
        }, c.env.JWT_SECRET)
        
        return c.text(jwt)
      } catch(e) {
        c.status(411);
        return c.text('invalid')
      }
    

})