import { Repository } from "typeorm";
import { Survey } from "../models/Surveys"  
import { dataSource } from "../database";

class SurveysRepository{
    
    private repository: Repository<Survey>

    constructor(){
        this.repository = dataSource.getRepository(Survey);
    }

    async findByDescription(description: string){
        return this.repository.findOneBy({description});
    }

    async findById(id: string){
        return this.repository.findOneBy({id});
    }

    async createAndSave(title: string, description: string){
        const survey = this.repository.create({title, description});
        return this.repository.save(survey);
    }

    async listAllSurveys(){
        return this.repository.find();
    }

}

export {SurveysRepository};