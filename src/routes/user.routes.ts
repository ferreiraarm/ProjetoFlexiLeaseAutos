import { Router } from 'express';
import UserController from '../api/controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/user', userController.create);
userRouter.get('/user/:id', userController.listUserId);
userRouter.put('/user/:id', userController.update);
userRouter.delete('/user/:id', userController.delete);

export default userRouter;
