import { Repository } from "typeorm";
import { SurveysUsers} from "../models/SurveysUsers";
import { dataSource } from "../database";

class SurveysUsersRepository{
    private repository: Repository<SurveysUsers>

    constructor(){
        this.repository = dataSource.getRepository(SurveysUsers);
    }

    async createAndSave(user_id: string, survey_id: string){
        const surveyUser = this.repository.create({user_id, survey_id});
        return this.repository.save(surveyUser);
    }
    

}

export { SurveysUsersRepository };