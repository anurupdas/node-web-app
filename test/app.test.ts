import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return the welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Hello, World! Welcome to the Node.js CI/CD pipeline with Docker, TypeScript and Kubernetes."
    );
  });
});
