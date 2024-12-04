import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import 'dotenv/config'

export const queryRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

queryRouter.post('/query', async(c) => {
    const prompt = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    console.log(prompt);

    const genAI = new GoogleGenerativeAI("AIzaSyC75D6gFNA1uU6G2-M8PZh4HL2yn4136oY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



    let lostItems = await prisma.lostItems.findMany();
    const lsItem = JSON.stringify(lostItems);
    const finalQuery = "I am going to provide the data and i will provide a vague description of an item that may or may not be present in the data if you find a slightly similar item in tha data then return the id of the item . If you do not find the item the return = hesoyam ONLY RETURN THE ID OF THE ITEM. Description : " + prompt.query + lsItem;
    // let finalQuery = {
    //     task : "I am going to provide the data and i will provide the description of an item that may or may not be present in the data if you find the item in tha data then return the id of the item.",
    //     description : prompt.query,
    //     data: lostItems
    // }

    // finalQuery = JSON.stringify(finalQuery);
    // console.log(finalQuery);
    const result = await model.generateContent(finalQuery);
    const response = result.response.text();
    return c.text(response); 
});

//api AIzaSyC75D6gFNA1uU6G2-M8PZh4HL2yn4136oY