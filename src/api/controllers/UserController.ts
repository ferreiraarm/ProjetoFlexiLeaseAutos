import { Request, Response } from 'express';
import CreateUserService from '../services/user/CreateUserService';
import UpdateUserService from '../services/user/UpdateUserService';
import DeleteUserService from '../services/user/DeleteUserService';
import ListUserService from '../services/user/ListUserService';

class UserController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, cpf, birth, cep, email, password } = request.body;
        const createUser = new CreateUserService();
        const user = createUser.execute({
            name,
            cpf,
            birth,
            cep,
            email,
            password,
        });
        return response.json(user);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, cpf, birth, cep, email, password } = request.body;
        const id = parseInt(request.params.id);

        const updateUser = new UpdateUserService();
        const user = updateUser.execute({
            id,
            name,
            cpf,
            birth,
            cep,
            email,
            password,
        });
        return response.json(user);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);

        const deleteUser = new DeleteUserService();
        await deleteUser.execute({ id });

        return response.status(204).send();
    }

    public async listUserId(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);

        const listUser = new ListUserService();
        const user = listUser.execute({ id });
        return response.json(user);
    }
}

export default UserController;
