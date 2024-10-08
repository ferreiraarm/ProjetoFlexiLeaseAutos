import { ICarListValuePerDay } from '../../interfaces/ICarListValuePerDayRequest';
import CarsRepository from '../../repositories/CarsRepository';

class ListCarValuePerDayService {
    constructor(private readonly carsRepository: CarsRepository) {}

    public async findByValuePerDay({ valuePerDay }: ICarListValuePerDay) {
        return this.carsRepository.findByValuePerDay(valuePerDay);
    }
}
export default ListCarValuePerDayService;
