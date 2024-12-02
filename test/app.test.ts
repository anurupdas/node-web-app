import request from "supertest";
import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send(
    "Hello, World! Welcome to the Node.js CI/CD pipeline with Docker, Kubernetes and Argo CD."
  );
});

describe("GET /", () => {
  it("should return the welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Hello, World! Welcome to the Node.js CI/CD pipeline with Docker, Kubernetes and Argo CD."
    );
  });
});
