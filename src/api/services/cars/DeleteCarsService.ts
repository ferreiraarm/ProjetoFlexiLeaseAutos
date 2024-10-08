import { AppDataSource } from '../../../database/data-source-cli';
import { IDeleteCarsEReservesServices } from '../../interfaces/IDeleteCarsEReservesServices';
import CarsModel from '../../models/CarsModel';

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
