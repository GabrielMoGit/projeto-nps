import { Router } from 'express';
import { SurveysController } from './controllers/surveysController';
import { UsersController } from "./controllers/usersController";

const router = Router();

const usersController = new UsersController(); 
const surveysController = new SurveysController();

//ROTAS PARA USERS
router.post("/users", usersController.create);

//ROTAS PARA SURVEYS
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);
export { router };
    
