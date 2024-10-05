import { AppDataSource } from 'src/database/data-source-cli';
import CarModel from 'src/api/models/CarModel';

class DeleteCarService {
    public async execute(id: number): Promise<void> {
        const carRepository = AppDataSource.getRepository(CarModel);
        const car = await carRepository.findOne({
            where: { id },
        });

        if (!car) {
            throw new Error('not found');
        }

        await carRepository.remove(car);
    }
}

export default DeleteCarService;
