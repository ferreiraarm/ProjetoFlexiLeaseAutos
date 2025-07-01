import { AppDataSource } from '../../../database/data-source-cli';
import { APIError } from '../../error/APIError';
import { IDeleteCarsEReservesServices } from '../../interfaces/IDeleteCarsEReservesServices';
import CarsModel from '../../models/CarsModel';

class DeleteCarsService {
    public async execute({
        id,
    }: IDeleteCarsEReservesServices): Promise<void | APIError> {
        const carsRepository = AppDataSource.getRepository(CarsModel);
        const cars = await carsRepository.findOne({
            where: { id },
        });

        if (!cars) {
            return {
                code: 404,
                status: 'Cars not found',
                message: 'Carros não encontrados',
            };
        }

        await carsRepository.remove(cars);
    }
}
export default DeleteCarsService;
