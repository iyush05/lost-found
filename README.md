# College Lost and Found Website

Welcome to the College Lost and Found website! This platform allows students to search for lost items and post items they have found. It is specifically designed for our college, ensuring safety and credibility by restricting access to users with college email addresses (`@akgec.ac.in`). The website uses a **Retrieval-Augmented Generation (RAG)** system powered by the open-source **Ollama LLM** model to intelligently match lost items with descriptions provided by users.

## Features
- **Search Lost Items**: Users can search for items they have lost.
- **Post Found Items**: Users can post items they have found for others to claim.
- **Secure Access**: Only students with a valid college email address can sign up and log in.
- **AI-Powered Matching**: Our system uses a RAG model with Ollama LLM to enhance matching accuracy between lost and found item descriptions.

## Live URL - https://lost-found-tau.vercel.app/

## Backend Routes

### Authentication
- **POST `/api/user/signin`**  
  _Parameters_: `email`, `password`  
  Allows users to sign in.

- **POST `/api/user/signup`**  
  _Parameters_: `name`, `email`, `password`  
  Allows users to sign up.

## Getting Started

Follow these steps to set up and run the project:

## 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
npm install
```

## 2. Backend Setup

Got to the /backend folder and run

```bash 
wrangler login
npm run deploy
```

copy the backend url and paste it in the /frontend/config.ts

Create a .env file and add the following environment variables (use prisma accelerate) :

```bash
DATABASE_URL=<your_database_url>
JWT_SECRET=<your_jwt_secret>
```
Set up the wrangler.toml file in /backend/wrangler.toml:

```bash
DATABASE_URL=<your_database_url>
JWT_SECRET=<your_jwt_secret>
```

## 3. Frontend Setup

Go to the /frontend folder.

In config.ts, set up the BACKEND_URL to point to your Cloudflare Workers:

```ts
export const BACKEND_URL = '<your_cloudflare_workers_url>';
```

## Start the development server
```bash
npm run dev
```

## Technologies Used 

- Vite.js for frontend.
- Hono for backend.
- Prisma for database ORM.
- PostgreSQL as the database.
- Ollama LLM to power item-description matching.
- Cloudflare Workers for serverless deployment.
