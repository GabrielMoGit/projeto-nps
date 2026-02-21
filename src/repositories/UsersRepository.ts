import { Repository } from "typeorm";
import { User } from "../models/User";
import { dataSource } from "../database";

//ORIGINAL
class UsersRepository{

    private repository: Repository<User>

    constructor(){
        this.repository = dataSource.getRepository(User)
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
