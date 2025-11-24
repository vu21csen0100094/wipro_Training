const request = require("supertest");
const { expect } = require("chai");
const app = require("../server");

describe("Users API – INTEGRATION TESTS", () => {

  it("GET /api/users should return array", async () => {
    const res = await request(app).get("/api/users").expect(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /api/users should create user", async () => {
    const payload = { name: "Rashmita", email: "r@test.com" };

    const res = await request(app)
      .post("/api/users")
      .send(payload)
      .expect(201);

    expect(res.body).to.have.property("id");
    expect(res.body.name).to.equal("Rashmita");
  });
});
