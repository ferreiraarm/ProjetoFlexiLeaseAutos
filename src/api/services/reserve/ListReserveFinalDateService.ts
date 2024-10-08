import { IReserveListFinalDateRequest } from '../../interfaces/IReserveListFinalDateRequest';
import ReservesRepository from '../../repositories/ReservesRepository';

class ListReserveFinalDateService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByFinalValue({ finalValue }: IReserveListFinalDateRequest) {
        return this.reserveRepository.finByFinalValue(finalValue);
    }
}
export default ListReserveFinalDateService;
