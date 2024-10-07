import { IReserveListStartDateRequest } from 'src/api/interfaces/IReserveListStartDateRequest';
import ReservesRepository from 'src/api/repositories/ReservesRepository';

class ListReserveStartDateService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByStartDate({ startDate }: IReserveListStartDateRequest) {
        return this.reserveRepository.findByStartDate(startDate);
    }
}
export default ListReserveStartDateService;
