import { Router } from 'express';
import AuthController from 'src/api/controllers/AuthController';

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/auth', authController.create);

export default authRouter;
