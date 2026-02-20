import {Router} from 'express';
import { UsersController } from "./controllers/usersController"
import { SurveysRepository } from './repositories/SurveysRepository';
import { SurveysController } from './controllers/surveysController';

const router = Router();

const usersController = new UsersController(); 
const surveysController = new SurveysController();

router.post("/users", usersController.create);
router.post("/surveys", surveysController.create);

export {router};