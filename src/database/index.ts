import { AppDataSource } from "./dataSource";
import { AppDataSourceTest } from "./dataSourceTest"

//ALTERAÇÃO PARA OS TESTES
const dataSource =
  process.env.NODE_ENV === "test"
    ? AppDataSourceTest
    : AppDataSource;
console.log("Using DB:", process.env.NODE_ENV);

export { dataSource };

//O QUE ESTAVA SENDO USADO PARA CONEXÃO REAL
/*AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("Error connecting database.", err);
  });
  */
