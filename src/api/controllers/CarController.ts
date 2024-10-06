import { Request, Response } from 'express';
import CreateCarService from '../services/car/CreateCarService';
import UpdateCarService from '../services/car/UpdateCarService';
import DeleteCarService from '../services/car/DeleteCarService';
import ListCarService from '../services/car/ListCarService';

class CarController {
    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);
        const { model, color, year, valuePerDay, numberOfPassengers, carsId } =
            request.body;

        const updateCar = new UpdateCarService();
        const car = await updateCar.execute({
            id,
            model,
            color,
            year,
            valuePerDay,
            numberOfPassengers,
            carsId,
        });

        return response.json(car);
    }

    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { model, color, year, valuePerDay, numberOfPassengers, carsId } =
            request.body;

        const createCar = new CreateCarService();
        const car = await createCar.execute({
            model,
            color,
            year,
            valuePerDay,
            numberOfPassengers,
            carsId,
        });
        return response.json(car);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);
        const carsId = request.body;

        const deleteCar = new DeleteCarService();
        await deleteCar.execute({ id, carsId });
        return response.status(204).send();
    }

    public async ListCarId(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);

        const listCar = new ListCarService();
        const car = await listCar.execute({ id });
        return response.json(car);
    }
}

export default CarController;
