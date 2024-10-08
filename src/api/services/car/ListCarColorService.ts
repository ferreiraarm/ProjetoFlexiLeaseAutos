import { ICarListColorRequest } from '../../interfaces/ICarListColorRequest';
import CarsRepository from '../../repositories/CarsRepository';

class ListCarColorService {
    constructor(private readonly carsRepository: CarsRepository) {}

    public async findByColor({ color }: ICarListColorRequest) {
        return this.carsRepository.findByColor(color);
    }
}
export default ListCarColorService;
