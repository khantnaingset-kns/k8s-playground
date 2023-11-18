const bootstrapApp = require("../src/app");
const supertest = require("supertest");

const app = bootstrapApp();

// Test the express app and route
describe("App E2E Test", () => {
  it("should return string message", async () => {
    // Act
    const response = await supertest(app).get("/");

    // Assert
    expect(response.status).toBe(200);
    expect(response.body.name).toBeDefined();
  });
});
