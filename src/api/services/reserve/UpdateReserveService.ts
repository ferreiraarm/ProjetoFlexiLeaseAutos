import { AppDataSource } from '../../../database/data-source-cli';
import ReserveDTO from '../../dtos/ReserveDTO';
import { IReserveUpdateRequest } from '../../interfaces/IReserveUpdateRequest';
import ReserveModel from '../../models/ReserveModel';
import ReservesModel from '../../models/ReservesModel';

class UpdateReserveService {
    public async execute({
        id,
        carId,
        startDate,
        finalValue,
        endDate,
        reservesId,
    }: IReserveUpdateRequest): Promise<ReserveDTO> {
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
            finalValue,
            endDate,
        });

        const reserveUpdate = await reserveRepository.findOne({
            where: { id: id },
        });

        if (!reserveUpdate) {
            throw new Error('nf');
        }
        return new ReserveDTO(reserveUpdate);
    }
}
export default UpdateReserveService;
