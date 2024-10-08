import { IReserveListUserIdRequest } from '../../interfaces/IReserveListUserIdRequest';
import ReservesRepository from '../../repositories/ReservesRepository';

class ListReserveUserIDService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByUserId({ userId }: IReserveListUserIdRequest) {
        return this.reserveRepository.findByUserId(userId);
    }
}
export default ListReserveUserIDService;
