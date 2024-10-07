import { ICarListValuePerDay } from 'src/api/interfaces/ICarListValuePerDayRequest';
import CarsRepository from 'src/api/repositories/CarsRepository';

class ListCarValuePerDayService {
    constructor(private readonly carsRepository: CarsRepository) {}

    public async findByValuePerDay({ valuePerDay }: ICarListValuePerDay) {
        return this.carsRepository.findByValuePerDay(valuePerDay);
    }
}
export default ListCarValuePerDayService;
