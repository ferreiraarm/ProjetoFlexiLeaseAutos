import { Router } from 'express';
import AcessoriesController from '../api/controllers/AcessoriesController';

const acessoriesRouter = Router();
const acessoriesController = new AcessoriesController();

acessoriesRouter.patch('/car/:id', acessoriesController.pacthUpdate); //mudar para patch

export default acessoriesRouter;
