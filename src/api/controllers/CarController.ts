import { Request, Response } from 'express';
import CreateCarService from '../services/car/CreateCarService';
import UpdateCarService from '../services/car/UpdateCarService';
import DeleteCarService from '../services/car/DeleteCarService';
import ListCarIdService from '../services/car/ListCarIdService';
import ListCarModelService from '../services/car/ListCarModelService';
import { AppDataSource } from 'src/database/data-source-cli';
import CarsRepository from '../repositories/CarsRepository';
import ListCarColorService from '../services/car/ListCarColorService';
import ListCarYearService from '../services/car/ListCarYearService';
import ListCarValuePerDayService from '../services/car/ListCarValuePerDayService';
import ListCarNumberOfPassengersService from '../services/car/ListCarNumberOfPassengersService';

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

    public async listCarId(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);

        const listCar = new ListCarIdService();
        const car = await listCar.execute({ id });
        return response.json(car);
    }

    public async listCarModel(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const model = request.params.model;
        const carsRepository = new CarsRepository(AppDataSource);

        const listCar = new ListCarModelService(carsRepository);
        const car = await listCar.findByModel({ model });
        return response.json(car);
    }

    public async listCarColor(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const color = request.params.color;
        const carsRepository = new CarsRepository(AppDataSource);

        const listCar = new ListCarColorService(carsRepository);
        const car = await listCar.findByColor({ color });
        return response.json(car);
    }

    public async listCarYear(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const year = parseInt(request.params.year);
        const carsRepository = new CarsRepository(AppDataSource);

        const listCar = new ListCarYearService(carsRepository);
        const car = await listCar.findByYear({ year });
        return response.json(car);
    }

    public async listCarValue(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const valuePerDay = parseInt(request.params.valuePerDay);
        const carsRepository = new CarsRepository(AppDataSource);

        const listCar = new ListCarValuePerDayService(carsRepository);
        const car = await listCar.findByValuePerDay({ valuePerDay });
        return response.json(car);
    }

    public async listCarNumberOfPassengers(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const numberOfPassengers = parseInt(request.params.numberOfPassengers);
        const carsRepository = new CarsRepository(AppDataSource);

        const listCar = new ListCarNumberOfPassengersService(carsRepository);
        const car = await listCar.findByNumberOfPassengers({
            numberOfPassengers,
        });
        return response.json(car);
    }
}

export default CarController;
