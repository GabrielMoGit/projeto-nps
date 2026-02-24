import { UsersRepository } from "../repositories/UsersRepository";
import { app } from "../app";
import  request  from "supertest";

describe("Users Repository - Test", () => {

  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "raquel@test.com",
      name: "Raquel"
    });

    expect(response.status).toBe(201);
  });

  it("Should not be able to create a new user with exists email", async() =>{
    const response1 = await request(app).post("/users").send({
      email: "raquel@test.com",
      name: "Raquel"
    });

    const response2 = await request(app).post("/users").send({
      email: "raquel@test.com",
      name: "Raquel"
    });


    expect(response2.status).toBe(400);

  });


});

export {};
