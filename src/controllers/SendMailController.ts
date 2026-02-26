import { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import SendMailServices from "../services/SendMailServices";
import {resolve} from "path";

class SendMailController {

    async execute(request: Request, response: Response){

        const {email, survey_id} = request.body;
       
        const userRepository = new UsersRepository();
        const surveyRepository = new SurveysRepository();
        const surveysUsersRepository = new SurveysUsersRepository();

        const user = await userRepository.findByEmail(email);
        if(!user){
            return response.status(400).json({
                error: "User doesn't exist!",
            });
        }

        const survey = await surveyRepository.findById(survey_id);
        if(!survey){
            return response.status(400).json({
                error: "Survey doesn't exist!",
            });
        }


        if (!user.id) {
        throw new Error("User not found");
        }
        
        const surveyUser = await surveysUsersRepository.createAndSave(user.id, survey_id);

        
        const npsPath = resolve(__dirname, "..", "views", "email", "npsMail.hbs") //BIBLIOTECA DE PATH PARA PEGAR O CAMINHO DA PASTA DE VIEW

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description
        }

        await SendMailServices.execute(email, survey.title, variables, npsPath)

        return response.json(surveyUser);
        
    }

}

export { SendMailController };