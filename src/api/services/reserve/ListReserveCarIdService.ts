import { IReserveListCarIdRequest } from '../../interfaces/IReserveListCarIdRequest';
import ReservesRepository from '../../repositories/ReservesRepository';

class ListReserveCarIdService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByCarId({ carId }: IReserveListCarIdRequest) {
        return this.reserveRepository.findByCarId(carId);
    }
}
export default ListReserveCarIdService;
