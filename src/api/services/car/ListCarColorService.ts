import { ICarListColorRequest } from 'src/api/interfaces/ICarListColorRequest';

import CarsRepository from 'src/api/repositories/CarsRepository';

class ListCarColorService {
    constructor(private readonly carsRepository: CarsRepository) {}

    public async findByColor({ color }: ICarListColorRequest) {
        return this.carsRepository.findByColor(color);
    }
}
export default ListCarColorService;
