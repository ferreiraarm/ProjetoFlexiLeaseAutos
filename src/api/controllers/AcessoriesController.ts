import { Request, Response } from 'express';

import PatchAcessoriesService from '../services/acessories/PatchAcessoriesService';
import CreateAcessoriesService from '../services/acessories/CreateAcessoriesService';

class AcessoriesController {
    public async pacthUpdate(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const carId = parseInt(request.params.id);
        const name = request.body;

        const updatepacthAcessories = new PatchAcessoriesService();
        const acessories = await updatepacthAcessories.execute({
            carId,
            name,
        });

        if (Object.keys(acessories).indexOf('code') !== -1) {
            return response.status(400).json(acessories);
        }

        return response.json(acessories);
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const car_id = parseInt(request.params.car_id);
        const { name } = request.body;

        const createAcessories = new CreateAcessoriesService();
        const acessories = await createAcessories.execute({
            name,
            car_id,
        });
        return response.json(acessories);
    }
}

export default AcessoriesController;
