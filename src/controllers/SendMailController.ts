import { Request, Response } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class SendMailController {

    async execute(request: Request, response: Response){

        const {email, survey_id} = request.body;
       
        const userRepository = new UsersRepository();
        const surveyRepository = new SurveysRepository();
        const surveysUsersRepository = new SurveysUsersRepository();

        const userAlreadyExist = await userRepository.findByEmail(email);
        if(!userAlreadyExist){
            return response.status(400).json({
                error: "User doesn't exist!",
            });
        }

        const surveyAlreadyExist = await surveyRepository.findById(survey_id);
        if(!surveyAlreadyExist){
            return response.status(400).json({
                error: "Survey doesn't exist!",
            });
        }

        const userId = await userRepository.findByEmail(email);

        if (!userId) {
        throw new Error("User not found");
        }
        
        const surveyUser = await surveysUsersRepository.createAndSave(userId.id, survey_id);
        return response.json(surveyUser);
        
    }

}

export { SendMailController };