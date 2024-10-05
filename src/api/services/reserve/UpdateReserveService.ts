import { AppDataSource } from 'src/database/data-source-cli';
import ReserveDTO from 'src/api/dtos/ReserveDTO';
import { IReserveCreateEUpdateRequest } from 'src/api/interfaces/IReserveCreateEUpdateRequest';
import ReservesModel from 'src/api/models/ReservesModel';
import ReserveModel from 'src/api/models/ReserveModel';

class UpdateReserveService {
    public async execute({
        carId,
        startDate,
        endDate,
        reservesId,
    }: IReserveCreateEUpdateRequest): Promise<ReserveDTO> {
        const reservesRepository = AppDataSource.getRepository(ReservesModel);
        const reserves = await reservesRepository.findOne({
            where: { id: reservesId },
        });

        if (!reserves) {
            throw new Error('nf');
        }

        const reserve = reserves.reserve.find((reserve) => reserve.id === id);
        if (!reserve) {
            throw new Error('nf');
        }

        const reserveRepository = AppDataSource.getRepository(ReserveModel);
        await reserveRepository.update(reserve.id, {
            carId,
            startDate,
            endDate,
        });
    }
}
export default UpdateReserveService;
