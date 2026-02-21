import { UsersRepository } from "../repositories/UsersRepository";
import { app } from "../app";
import  request  from "supertest";

describe("Users Repository - Test", () => {

  it("Should be possible to create a new user", async () => {
    const response = await request(app).post("/users").send({
        email: "raquel@test.com",
        name: "Raquel"
    });

    console.log(response.body);
    console.log(response.status);

    expect(response.status).toBe(201);
    //expect(user.name).toBe("Gabriel");
    //expect(user.email).toBe("gabriel@test.com");
  });


});

export {};
