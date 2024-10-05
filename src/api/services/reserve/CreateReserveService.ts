import { AppDataSource } from 'src/database/data-source-cli';
import ReserveDTO from 'src/api/dtos/ReserveDTO';
import { IReserveCreateEUpdateRequest } from 'src/api/interfaces/IReserveCreateEUpdateRequest';

import ReserveModel from 'src/api/models/ReserveModel';

import ReservesModel from 'src/api/models/ReservesModel';

class CreateReserveService {
    public async execute({
        startDate,
        endDate,
        carId,
        reservesId,
    }: IReserveCreateEUpdateRequest): Promise<ReserveDTO> {
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
