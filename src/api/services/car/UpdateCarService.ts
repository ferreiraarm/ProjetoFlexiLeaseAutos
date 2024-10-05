import { AppDataSource } from 'src/database/data-source-cli';
import CarDTO from 'src/api/dtos/CarDTO';
import { ICarUpdateRequest } from 'src/api/interfaces/ICarUpdateRequest';
import CarsModel from 'src/api/models/CarsModel';
import CarModel from 'src/api/models/CarModel';

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
