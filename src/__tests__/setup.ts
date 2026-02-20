import { AppDataSourceTest } from "../database/dataSourceTest";

beforeAll(async () => {
  // Inicializa o DataSource de teste
  if (!AppDataSourceTest.isInitialized) {
    await AppDataSourceTest.initialize();
    console.log("Banco de teste conectado!");
  }
});

afterAll(async () => {
  // Fecha a conexão após todos os testes
  if (AppDataSourceTest.isInitialized) {
    await AppDataSourceTest.destroy();
    console.log("Banco de teste desconectado!");
  }
});

afterEach(async () => {
  // Limpa todas as tabelas depois de cada teste
  const entities = AppDataSourceTest.entityMetadatas;

  for (const entity of entities) {
    const repository = AppDataSourceTest.getRepository(entity.name);
    await repository.clear();
  }
});
