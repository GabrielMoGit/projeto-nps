
/*
describe("First", () => {
    it("deve ser possível somar 2 números", () => {   //O QUE O TESTE VAI FAZER
        expect(2 + 2).toBe(4); //O QUE A GENTE ESPERA DO TESTE
    });
});
*/

import request from "supertest";
import { AppDataSourceTest } from "../database/dataSourceTest";
import { UsersRepository } from "../repositories/UsersRepository";

describe("Users Repository - Teste", () => {

  it("deve criar um usuário no banco de teste", async () => {
    const usersRepository = new UsersRepository(true); // modo teste

    const user = await usersRepository.createAndSave("Gabriel", "gabriel@test.com");

    expect(user.id).toBeDefined();
    expect(user.name).toBe("Gabriel");
    expect(user.email).toBe("gabriel@test.com");
  });

});

export{};