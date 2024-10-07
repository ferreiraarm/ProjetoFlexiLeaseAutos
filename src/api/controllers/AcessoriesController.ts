import { Request, Response } from 'express';

import PatchAcessoriesService from '../services/acessories/PatchAcessoriesService';

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

        return response.json(acessories);
    }
}

export default AcessoriesController;
