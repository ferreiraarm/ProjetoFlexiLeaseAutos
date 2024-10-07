import { ICarListNumberOfPassengersRequest } from 'src/api/interfaces/ICarListNumberOfPassengersRequest';

import CarsRepository from 'src/api/repositories/CarsRepository';

class ListCarNumberOfPassengersService {
    constructor(private readonly carsRepository: CarsRepository) {}

    public async findByNumberOfPassengers({
        numberOfPassengers,
    }: ICarListNumberOfPassengersRequest) {
        return this.carsRepository.findByNumberOfPassengers(numberOfPassengers);
    }
}
export default ListCarNumberOfPassengersService;
