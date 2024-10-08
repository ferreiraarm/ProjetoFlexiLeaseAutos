import { AppDataSource } from '../../../database/data-source-cli';
import ReservesDTO from '../../dtos/ReservesDTO';
import ReservesModel from '../../models/ReservesModel';

class ListAllReservesService {
    public async execute(): Promise<ReservesDTO[]> {
        const reservesRepository = AppDataSource.getRepository(ReservesModel);
        const reserves = await reservesRepository.find({
            select: {
                id: true,
                total: true,
                limit: true,
                offset: true,
                offsets: true,
            },
            relations: {
                reserve: true,
            },
            order: {
                id: 'ASC',
                reserve: {
                    id: 'ASC',
                },
            },
        });
        if (!reserves) {
            throw new Error('nf');
        }

        return reserves;
    }
}

export default ListAllReservesService;
