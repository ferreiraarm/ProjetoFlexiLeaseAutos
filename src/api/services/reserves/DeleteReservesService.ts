import { AppDataSource } from 'src/database/data-source-cli';
import ReservesModel from 'src/api/models/ReservesModel';
import { IDeleteCarsEReservesServices } from 'src/api/interfaces/IDeleteCarsEReservesServices';

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
