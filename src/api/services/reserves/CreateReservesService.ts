import ReservesModel from 'src/api/models/ReservesModel';
import { AppDataSource } from 'src/database/data-source-cli';
import ReservesDTO from 'src/api/dtos/ReservesDTO';
import { IReservesCreateRequest } from 'src/api/interfaces/IReservesCreateRequest';

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
