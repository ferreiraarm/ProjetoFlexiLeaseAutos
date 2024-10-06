import { Request, Response } from 'express';
import CreateCarsService from '../services/cars/CreateCarsService';
import DeleteCarsService from '../services/cars/DeleteCarsService';
import ListAllCarsService from '../services/cars/ListAllCarsService';

class CarsController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { total, limit, offset, offsets } = request.body;

        const createCars = new CreateCarsService();
        const cars = await createCars.execute({
            total,
            limit,
            offset,
            offsets,
        });

        return response.json(cars);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);

        const deleteCars = new DeleteCarsService();
        await deleteCars.execute({ id });
        return response.status(204).send();
    }

    public async listReserves(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listCars = new ListAllCarsService();
        const cars = await listCars.execute();
        return response.json(cars);
    }
}

export default CarsController;
