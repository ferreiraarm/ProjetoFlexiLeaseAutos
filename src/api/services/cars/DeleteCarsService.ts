import { AppDataSource } from 'src/database/data-source-cli';
import CarsModel from 'src/api/models/CarsModel';
import { IDeleteCarsEReservesServices } from 'src/api/interfaces/IDeleteCarsEReservesServices';

class DeleteCarsService {
    public async execute({ id }: IDeleteCarsEReservesServices): Promise<void> {
        const carsRepository = AppDataSource.getRepository(CarsModel);
        const cars = await carsRepository.findOne({
            where: { id },
        });

        if (!cars) {
            throw new Error('cars not found');
        }

        await carsRepository.remove(cars);
    }
}
export default DeleteCarsService;
