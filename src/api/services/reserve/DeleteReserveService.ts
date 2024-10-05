import { AppDataSource } from 'src/database/data-source-cli';
import ReserveModel from 'src/api/models/ReserveModel';
import ReservesModel from 'src/api/models/ReservesModel';

class DeleteReserveService {
    public async execute(id: number, reservesId: number): Promise<void> {
        const reservesRepository = AppDataSource.getRepository(ReservesModel);
        const reserves = await reservesRepository.findOne({
            where: { id: reservesId },
            relations: ['reserves'],
        });

        if (!reserves) {
            throw new Error('nf');
        }

        const reserve = reserves.reserve.find((reserve) => reserve.id === id);
        if (!reserve) {
            throw new Error('nf');
        }

        const reserveRepository = AppDataSource.getRepository(ReserveModel);
        await reserveRepository.remove(reserve);
    }
}
export default DeleteReserveService;
