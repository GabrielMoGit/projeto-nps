import { Repository } from "typeorm";
import { SurveysUsers} from "../models/SurveysUsers";
import { dataSource } from "../database";

class SurveysUsersRepository{
    private repository: Repository<SurveysUsers>

}

export { SurveysUsersRepository };