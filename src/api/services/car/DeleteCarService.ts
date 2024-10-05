import { AppDataSource } from 'src/database/data-source-cli';
import CarModel from 'src/api/models/CarModel';
import CarsModel from 'src/api/models/CarsModel';

class DeleteCarService {
    public async execute(id: number, carsId: number): Promise<void> {
        const carsRepository = AppDataSource.getRepository(CarsModel);
        const cars = await carsRepository.findOne({
            where: { id: carsId },
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
