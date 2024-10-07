import { Router } from 'express';
import ReserveController from 'src/api/controllers/ReserveController';

const reserveRouter = Router();
const reserveController = new ReserveController();

reserveRouter.post('/reserve', reserveController.create);
reserveRouter.get('/car/:id', reserveController.listReserveId);
reserveRouter.put('/car/:id', reserveController.update);
reserveRouter.delete('/car/:id', reserveController.delete);

export default reserveRouter;
