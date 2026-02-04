import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  synchronize: false,
});
