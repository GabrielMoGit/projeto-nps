import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../models/User"; // ajuste para suas entidades



export const AppDataSourceTest = new DataSource({
  type: "sqlite",
  database: ":memory:", // banco em memória só para teste
  synchronize: true,     // cria automaticamente tabelas
  logging: false,
  entities: [User],      // coloque todas as entidades que precisar testar
});
