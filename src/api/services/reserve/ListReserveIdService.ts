import { AppDataSource } from '../../../database/data-source-cli';
import ReserveDTO from '../../dtos/ReserveDTO';
import { IReserveListIdRequest } from '../../interfaces/IReserveListIdRequest';
import ReserveModel from '../../models/ReserveModel';

class ListReserveIdService {
    public async execute({ id }: IReserveListIdRequest): Promise<ReserveDTO> {
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

export default ListReserveIdService;
