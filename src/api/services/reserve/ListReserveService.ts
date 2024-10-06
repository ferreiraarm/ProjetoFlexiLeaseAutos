import ReserveDTO from 'src/api/dtos/ReserveDTO';
import { IReserveListRequest } from 'src/api/interfaces/IReserveListRequest';
import ReserveModel from 'src/api/models/ReserveModel';
import { AppDataSource } from 'src/database/data-source-cli';

class ListReserveService {
    public async execute({ id }: IReserveListRequest): Promise<ReserveDTO> {
        const reserveRepository = AppDataSource.getRepository(ReserveModel);
        const reserve = await reserveRepository.findOne({
            where: { id },
        });

        if (!reserve) {
            throw new Error('nf');
        }
        return new ReserveDTO(reserve);
    }
}

export default ListReserveService;
