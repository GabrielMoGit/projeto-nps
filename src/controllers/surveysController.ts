import {Request, Response} from "express";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController{

    async create(request: Request, response: Response){
        const {title, description} = request.body;  

        const surveysRepository = new SurveysRepository();

        const survey = await surveysRepository.createAndSave(title, description);

        return response.status(201).json(survey);

    }
}

export {SurveysController};