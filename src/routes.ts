import { Router } from 'express';
import { SurveysController } from './controllers/surveysController';
import { UsersController } from "./controllers/usersController";
import { SendMailController } from './controllers/SendMailController';

const router = Router();

const usersController = new UsersController(); 
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

//ROTAS PARA USERS
router.post("/users", usersController.create);

//ROTAS PARA SURVEYS
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);
export { router };

//ROTAS PARA SURVEYSUSERS
router.post("/sendMail", sendMailController.execute);
    
