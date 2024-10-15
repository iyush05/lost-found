import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'  
import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

app.use('/*', cors());
app.route("/api/user", userRouter);

export default app
