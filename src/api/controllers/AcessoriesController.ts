import { Request, Response } from 'express';
import CreateAcessoriesService from '../services/acessories/CreateAcessoriesService';
import DeleteAcessoriesService from '../services/acessories/DeleteAcessoriesService';

class AcessoriesController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const carId = parseInt(request.params.id);
        const name = request.body;

        const CreateAcessories = new CreateAcessoriesService();
        const acessories = await CreateAcessories.execute({
            carId,
            name,
        });

        return response.json(acessories);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);

        const deleteAcessories = new DeleteAcessoriesService();
        await deleteAcessories.execute({ id });

        return response.status(204).send();
    }
}

export default AcessoriesController;
