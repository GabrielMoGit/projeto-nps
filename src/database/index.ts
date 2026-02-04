import { AppDataSource } from "./dataSource";

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado com sucesso");
  })
  .catch((err) => {
    console.error("Erro ao conectar no banco", err);
  });
