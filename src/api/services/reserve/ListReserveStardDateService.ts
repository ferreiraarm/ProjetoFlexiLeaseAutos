import { IReserveListStartDateRequest } from '../../interfaces/IReserveListStartDateRequest';
import ReservesRepository from '../../repositories/ReservesRepository';

class ListReserveStartDateService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByStartDate({ startDate }: IReserveListStartDateRequest) {
        return this.reserveRepository.findByStartDate(startDate);
    }
}
export default ListReserveStartDateService;
