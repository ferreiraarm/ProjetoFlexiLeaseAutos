import { AppDataSource } from 'src/database/data-source-cli';
import ReservesModel from 'src/api/models/ReservesModel';

class DeleteReservesService {
    public async execute(): Promise<void> {
        const reservesRepository = AppDataSource.getRepository(ReservesModel);
        const reserves = await reservesRepository.find();

        await reservesRepository.remove(reserves);
    }
}
export default DeleteReservesService;
