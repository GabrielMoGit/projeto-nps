import { Repository } from "typeorm";
import { User } from "../models/User";
import { AppDataSource } from "../database/dataSource";
import { AppDataSourceTest } from "../database/dataSourceTest"; //BANCO DATA SOURCE APENAS PARA TESTE

//ORIGINAL
/*class UsersRepository{

    private repository: Repository<User>

    constructor(){
        this.repository = AppDataSource.getRepository(User)
    }
    
    async findByEmail(email: string){
        return this.repository.findOneBy({email});
    }

    async createAndSave(name: string, email: string){
        const user = this.repository.create({name, email});
        return this.repository.save(user)
    }
}

export {UsersRepository};
*/


//ESSE É APENAS PARA TESTE!!!!!!!!!!!!!!
class UsersRepository {
  private repository: Repository<User>;

  constructor(testMode = false) {
    const dataSource = testMode ? AppDataSourceTest : AppDataSource;
    this.repository = dataSource.getRepository(User);
  }

  async findByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  async createAndSave(name: string, email: string) {
    const user = this.repository.create({ name, email });
    return this.repository.save(user);
  }
}

export { UsersRepository };