import { AppDataSource } from '../../../database/data-source-cli';
import { IDeleteCarsEReservesServices } from '../../interfaces/IDeleteCarsEReservesServices';
import ReservesModel from '../../models/ReservesModel';

class DeleteReservesService {
    public async execute({ id }: IDeleteCarsEReservesServices): Promise<void> {
        const reservesRepository = AppDataSource.getRepository(ReservesModel);
        const reserves = await reservesRepository.findOne({
            where: { id },
        });

        if (!reserves) {
            throw new Error('Reservers not found');
        }

        await reservesRepository.remove(reserves);
    }
}
export default DeleteReservesService;
