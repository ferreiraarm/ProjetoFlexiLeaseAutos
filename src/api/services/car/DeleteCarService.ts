import { AppDataSource } from '../../../database/data-source-cli';
import { ICarDeleteRequest } from '../../interfaces/ICarDeleteRequest';
import CarModel from '../../models/CarModel';
import CarsModel from '../../models/CarsModel';

class DeleteCarService {
    public async execute({ id, cars_id }: ICarDeleteRequest): Promise<void> {
        const carsRepository = AppDataSource.getRepository(CarsModel);
        const cars = await carsRepository.findOne({
            where: { id: cars_id },
            relations: ['car'],
        });

        if (!cars) {
            throw new Error('not found');
        }

        const car = cars.car.find((car) => car.id === id);

        if (!car) {
            throw new Error('not found');
        }
        const carRepository = AppDataSource.getRepository(CarModel);

        await carRepository.remove(car);
    }
}

export default DeleteCarService;
