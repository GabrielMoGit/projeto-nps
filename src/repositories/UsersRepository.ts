import { Repository } from "typeorm";
import {User} from "../models/User";
import { AppDataSource } from "../database/dataSource";

class userRepository{

    private repository: Repository<User>

    constructor(){
        this.repository = AppDataSource.getRepository(User)
    }


    
}

export {userRepository};