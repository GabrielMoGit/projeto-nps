 import request from "supertest";
import { app } from "../app";

describe("Surveys Repository - Test", () => {

    it("Should be able to create a new survey", async() =>{
        const response = await request(app).post("/surveys").send({
            title: "League of Legends opinião",
            description: "O que está achando da nova season do lol?"
        });

        console.log(response.body);

        expect(response.status).toBe(201);
    });

});

export { };