import { AppDataSource } from '../../../database/data-source-cli';
import CarDTO from '../../dtos/CarDTO';
import { ICarUpdateRequest } from '../../interfaces/ICarUpdateRequest';
import CarModel from '../../models/CarModel';
import CarsModel from '../../models/CarsModel';

class UpdateCarService {
    public async execute({
        id,
        model,
        color,
        year,
        valuePerDay,
        numberOfPassengers,
        carsId,
    }: ICarUpdateRequest): Promise<CarDTO> {
        const carsRepository = AppDataSource.getRepository(CarsModel);
        const cars = await carsRepository.findOne({
            where: { id: carsId },
        });

        if (!cars) {
            throw new Error('Cars not found');
        }

        const car = cars.car.find((car) => car.id === id);

        if (!car) {
            throw new Error('not f');
        }

        const carRepository = AppDataSource.getRepository(CarModel);
        await carRepository.update(car.id, {
            model,
            color,
            year,
            valuePerDay,
            numberOfPassengers,
        });

        const carUpdate = await carRepository.findOne({
            where: { id: id },
            relations: ['cars'],
        });

        if (!carUpdate) {
            throw new Error('n f');
        }

        return new CarDTO(carUpdate);
    }
}

export default UpdateCarService;
