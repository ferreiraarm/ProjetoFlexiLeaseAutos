import { ICarListModelRequest } from '../../interfaces/ICarListModelRequest';
import CarsRepository from '../../repositories/CarsRepository';

class ListCarModelService {
    constructor(private readonly carsRepository: CarsRepository) {}

    public async findByModel({ model }: ICarListModelRequest) {
        return this.carsRepository.findByModel(model);
    }
}
export default ListCarModelService;
