import { Router } from 'express';
import CarsController from '../api/controllers/CarsController';

const carsRouter = Router();
const carsController = new CarsController();

carsRouter.post('/cars', carsController.create);
carsRouter.delete('/cars/:id', carsController.delete);
carsRouter.get('/car', carsController.listCars);

export default carsRouter;
