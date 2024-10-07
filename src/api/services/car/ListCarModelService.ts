import { ICarListModelRequest } from 'src/api/interfaces/ICarListModelRequest';

import CarsRepository from 'src/api/repositories/CarsRepository';

class ListCarModelService {
    constructor(private readonly carsRepository: CarsRepository) {}

    public async findByModel({ model }: ICarListModelRequest) {
        return this.carsRepository.findByModel(model);
    }
}
export default ListCarModelService;
