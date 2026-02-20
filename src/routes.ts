import { Router } from 'express';
import { SurveysController } from './controllers/surveysController';
import { UsersController } from "./controllers/usersController";

const router = Router();

const usersController = new UsersController(); 
const surveysController = new SurveysController();

router.post("/users", usersController.create);
router.post("/surveys", surveysController.create);

export { router };
