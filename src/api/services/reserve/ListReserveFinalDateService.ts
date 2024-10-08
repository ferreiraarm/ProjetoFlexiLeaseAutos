import { IReserveListFinalDateRequest } from '../../interfaces/IReserveListFinalDateRequest';
import ReservesRepository from '../../repositories/ReservesRepository';

class ListReserveFinalDateService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByFinalDate({ finalDate }: IReserveListFinalDateRequest) {
        return this.reserveRepository.findByFinalDate(finalDate);
    }
}
export default ListReserveFinalDateService;
