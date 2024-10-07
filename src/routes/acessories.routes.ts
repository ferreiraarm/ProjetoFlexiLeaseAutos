import { Router } from 'express';
import AcessoriesController from 'src/api/controllers/AcessoriesController';

const acessoriesRouter = Router();
const acessoriesController = new AcessoriesController();

acessoriesRouter.post('/car/:id', acessoriesController.create); //mudar para patch

export default acessoriesRouter;
