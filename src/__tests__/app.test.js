const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("Should return 200 and Hello World Message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Hello World");
  });
});

describe("POST /auth/register", () => {
  it("Should register a user and return 201 with userdata ", async () => {
    const res = await request(app).post("/auth/register").send({
      username: "testuser",
      email: "testuser@exmple.com",
      password: "password123",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("message", "User Created Successfully");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("username", "testuser");
    expect(res.body.user).toHaveProperty("email", "testuser@exmple.com");
  });
});
