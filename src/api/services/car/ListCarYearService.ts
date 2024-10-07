import { ICarListYearRequest } from 'src/api/interfaces/ICarListYearRequest';

import CarsRepository from 'src/api/repositories/CarsRepository';

class ListCarYearService {
    constructor(private readonly carsRepository: CarsRepository) {}

    public async findByYear({ year }: ICarListYearRequest) {
        return this.carsRepository.findByYear(year);
    }
}
export default ListCarYearService;
