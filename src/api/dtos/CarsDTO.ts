import CarModel from '../models/CarModel';
import CarsModel from '../models/CarsModel';

export default class CarsDTO {
    car: CarModel[];
    total: number;
    limit: number;
    offset: number;
    offsets: number;

    constructor(cars: CarsModel) {
        this.car = cars.car;
        this.total = cars.total;
        this.limit = cars.limit;
        this.offset = cars.offset;
        this.offsets = cars.offsets;
    }
}
