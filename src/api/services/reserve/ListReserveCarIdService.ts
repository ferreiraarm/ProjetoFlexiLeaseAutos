import { IReserveListCarIdRequest } from 'src/api/interfaces/IReserveListCarIdRequest';
import ReservesRepository from 'src/api/repositories/ReservesRepository';

class ListReserveCarIdService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByCarId({ carId }: IReserveListCarIdRequest) {
        return this.reserveRepository.findByCarId(carId);
    }
}
export default ListReserveCarIdService;
