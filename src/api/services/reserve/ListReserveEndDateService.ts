import { IReserveListEndDateRequest } from 'src/api/interfaces/IReserveListEndDateRequest';

import ReservesRepository from 'src/api/repositories/ReservesRepository';

class ListReserveEndDateService {
    constructor(private readonly reserveRepository: ReservesRepository) {}

    public async finByEndDate({ endDate }: IReserveListEndDateRequest) {
        return this.reserveRepository.findByEndDate(endDate);
    }
}
export default ListReserveEndDateService;
