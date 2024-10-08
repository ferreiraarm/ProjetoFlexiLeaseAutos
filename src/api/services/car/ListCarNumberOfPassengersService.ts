import { ICarListNumberOfPassengersRequest } from '../../interfaces/ICarListNumberOfPassengersRequest';
import CarsRepository from '../../repositories/CarsRepository';

class ListCarNumberOfPassengersService {
    constructor(private readonly carsRepository: CarsRepository) {}

    public async findByNumberOfPassengers({
        numberOfPassengers,
    }: ICarListNumberOfPassengersRequest) {
        return this.carsRepository.findByNumberOfPassengers(numberOfPassengers);
    }
}
export default ListCarNumberOfPassengersService;
