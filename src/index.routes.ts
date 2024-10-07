import { Router } from 'express';
import acessoriesRouter from './routes/acessories.routes';
import authRouter from './routes/auth.routes';
import carRouter from './routes/car.routes';
import carsRouter from './routes/cars.routes';
import reserveRouter from './routes/reserve.routes';
import reservesRouter from './routes/reserves.routes';
import userRouter from './routes/user.routes';

const routes = Router();
routes.use('/v1', acessoriesRouter);
routes.use('/v1', authRouter);
routes.use('/v1', carRouter);
routes.use('/v1', carsRouter);
routes.use('/v1', reserveRouter);
routes.use('/v1', reservesRouter);
routes.use('/v1', userRouter);
export default routes;
