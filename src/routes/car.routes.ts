import { Router } from 'express';
import CarController from 'src/api/controllers/CarController';

const carRouter = Router();

const carController = new CarController();

carRouter.post('/car', carController.create);
carRouter.get('/car/:id', carController.listCarId);
carRouter.put('/car/:id', carController.update);
carRouter.delete('/car/:id', carController.delete);
carRouter.get('/car/:model', carController.listCarModel);
carRouter.get('/car/:color', carController.listCarColor);
carRouter.get('/car/:year', carController.listCarYear);
carRouter.get('/car/:valuePerDay', carController.listCarValue);
carRouter.get(
    '/car/:numberOfPassengers',
    carController.listCarNumberOfPassengers,
);

export default carRouter;
