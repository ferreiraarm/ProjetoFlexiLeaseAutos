import { AppDataSource } from '../../../database/data-source-cli';
import CarDTO from '../../dtos/CarDTO';
import { APIError } from '../../error/APIError';
import { ICarCreateRequest } from '../../interfaces/ICarCreateRequest';
import CarModel from '../../models/CarModel';
import CarsModel from '../../models/CarsModel';

class CreateCarService {
    public async execute({
        model,
        color,
        year,
        valuePerDay,
        numberOfPassengers,
        cars_id,
    }: ICarCreateRequest): Promise<CarDTO | APIError> {
        try {
            const carsRepository = AppDataSource.getRepository(CarsModel);
            const cars = await carsRepository.findOne({
                where: { id: cars_id },
            });

            if (!cars) {
                return {
                    code: 404,
                    status: 'Not Found',
                    message: 'O array de carros não foi encontrado.',
                };
            }
            const carRepository = AppDataSource.getRepository(CarModel);

            if (model === undefined || model === null) {
                throw Error;
            }

            const car = await carRepository.create({
                model,
                color,
                year,
                valuePerDay,
                numberOfPassengers,
                cars,
            });
            await carRepository.save(car);
            return new CarDTO(car);
        } catch (error) {
            return {
                code: 500,
                status: 'Internal Server Error',
                message: 'Ocorreu um erro inesperado.',
            };
        }
    }
}
export default CreateCarService;
