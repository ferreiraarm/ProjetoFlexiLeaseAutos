import { AppDataSource } from 'src/database/data-source-cli';
import CarsModel from 'src/api/models/CarsModel';

class DeleteCarsService {
    public async execute(): Promise<void> {
        const carsRepository = AppDataSource.getRepository(CarsModel);
        const cars = await carsRepository.find();

        await carsRepository.remove(cars);
    }
}
export default DeleteCarsService;
