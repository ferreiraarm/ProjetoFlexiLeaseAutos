import { Router } from 'express';
import AcessoriesController from '../api/controllers/AcessoriesController';

const acessoriesRouter = Router();
const acessoriesController = new AcessoriesController();

acessoriesRouter.patch('/car/:id', acessoriesController.pacthUpdate);
acessoriesRouter.post('/car/:car_id/acessories', acessoriesController.create);

export default acessoriesRouter;
