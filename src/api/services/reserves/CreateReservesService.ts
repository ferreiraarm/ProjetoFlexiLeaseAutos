import { AppDataSource } from '../../../database/data-source-cli';
import ReservesDTO from '../../dtos/ReservesDTO';
import { IReservesCreateRequest } from '../../interfaces/IReservesCreateRequest';
import ReservesModel from '../../models/ReservesModel';

class CreateReservesService {
    public async execute({
        total,
        limit,
        offset,
        offsets,
    }: IReservesCreateRequest): Promise<ReservesDTO> {
        const reservesRepository = AppDataSource.getRepository(ReservesModel);
        const reserves = await reservesRepository.create({
            total,
            limit,
            offset,
            offsets,
        });

        await reservesRepository.save(reserves);
        return new ReservesDTO(reserves);
    }
}
export default CreateReservesService;
