import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Hello, World! Welcome to the Node.js CI/CD pipeline with Docker and TypeScript.Test #3"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
