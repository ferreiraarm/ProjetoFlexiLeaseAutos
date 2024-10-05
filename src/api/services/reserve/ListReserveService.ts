import ReserveDTO from 'src/api/dtos/ReserveDTO';
import ReserveModel from 'src/api/models/ReserveModel';
import { AppDataSource } from 'src/database/data-source-cli';

class ListReserveService {
    public async execute(id: number): Promise<ReserveDTO> {
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
