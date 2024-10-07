import { Router } from 'express';
import ReserveController from 'src/api/controllers/ReserveController';

const reserveRouter = Router();
const reserveController = new ReserveController();

reserveRouter.post('/reserve', reserveController.create);
reserveRouter.get('/reserve/:id', reserveController.listReserveId);
reserveRouter.put('/reserve/:id', reserveController.update);
reserveRouter.delete('/reserve/:id', reserveController.delete);
reserveRouter.get('/reserve/:carId', reserveController.listReserveCarId);
reserveRouter.get('/reserve/:endDate', reserveController.listReserveEndDate);
reserveRouter.get(
    '/reserve/:finalDate',
    reserveController.listReserveFinalDate,
);
reserveRouter.get(
    '/reserve/:startDate',
    reserveController.listReserveStartDate,
);
reserveRouter.get('/reserve/:userId', reserveController.listReserveUserId);

export default reserveRouter;
