import { Router } from 'express';
import ReservesController from 'src/api/controllers/ReservesController';

const reservesRouter = Router();
const reservesController = new ReservesController();

reservesRouter.post('/reserves', reservesController.create);
reservesRouter.delete('/reserves/:id', reservesController.delete);
reservesRouter.get('/reserve', reservesController.listReserves);

export default reservesRouter;
