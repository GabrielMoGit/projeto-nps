import { Repository } from "typeorm";
import { Survey } from "../models/Surveys"
import { AppDataSource } from "../database/dataSource";

class SurveysRepository{
    
    private repository: Repository<Survey>

    constructor(){
        this.repository = AppDataSource.getRepository(Survey);
    }

    async findByDescription(description: string){
        return this.repository.findOneBy({description});
    }

    async createAndSave(title: string, description: string){
        const survey = this.repository.create({title, description});
        return this.repository.save(survey);
    }

}

export {SurveysRepository};