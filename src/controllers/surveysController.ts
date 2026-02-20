import {Request, Response} from "express";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController{

    async create(request: Request, response: Response){
        const {title, description} = request.body;  

        const surveysRepository = new SurveysRepository();

        const survey = await surveysRepository.createAndSave(title, description);

        return response.status(201).json(survey);

    }

    async show(request: Request, response: Response){
        const surveysRepository = new SurveysRepository();
        const allSurveys = await surveysRepository.listAllSurveys();
        return response.json(allSurveys);
    }
}

export {SurveysController};