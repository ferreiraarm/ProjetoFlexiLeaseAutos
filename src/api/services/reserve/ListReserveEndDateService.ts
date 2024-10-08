import { IReserveListEndDateRequest } from '../../interfaces/IReserveListEndDateRequest';
import ReservesRepository from '../../repositories/ReservesRepository';

class ListReserveEndDateService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByEndDate({ endDate }: IReserveListEndDateRequest) {
        return this.reserveRepository.findByEndDate(endDate);
    }
}
export default ListReserveEndDateService;
