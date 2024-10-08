import { AppDataSource } from '../../../database/data-source-cli';
import ReserveDTO from '../../dtos/ReserveDTO';
import { IReserveCreateRequest } from '../../interfaces/IReserveCreateRequest';
import ReserveModel from '../../models/ReserveModel';
import ReservesModel from '../../models/ReservesModel';

class CreateReserveService {
    public async execute({
        startDate,
        endDate,
        carId,
        reservesId,
    }: IReserveCreateRequest): Promise<ReserveDTO> {
        const reservesRepository = AppDataSource.getRepository(ReservesModel);
        const reserves = await reservesRepository.findOne({
            where: { id: reservesId },
        });

        if (!reserves) {
            throw new Error('nf');
        }

        const reserveRepository = AppDataSource.getRepository(ReserveModel);

        const reserve = await reserveRepository.create({
            startDate,
            endDate,
            carId,
        });
        await reserveRepository.save(reserve);
        return new ReserveDTO(reserve);
    }
}

export default CreateReserveService;
