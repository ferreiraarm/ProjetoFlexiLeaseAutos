import { Request, Response } from 'express';

import PatchAcessoriesService from '../services/acessories/PatchAcessoriesService';
import { APIError } from '../error/APIError';

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

        if (acessories instanceof APIError) {
            return response.status(404).json(acessories);
        }

        return response.json(acessories);
    }
}

export default AcessoriesController;
