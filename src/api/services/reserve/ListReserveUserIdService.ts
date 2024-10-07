import { IReserveListUserIdRequest } from 'src/api/interfaces/IReserveListUserIdRequest';
import ReservesRepository from 'src/api/repositories/ReservesRepository';

class ListReserveUserIDService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByUserId({ userId }: IReserveListUserIdRequest) {
        return this.reserveRepository.findByUserId(userId);
    }
}
export default ListReserveUserIDService;
