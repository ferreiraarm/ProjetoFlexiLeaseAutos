import CarModel from '../models/CarModel';
import CarsModel from '../models/CarsModel';

export default class CarsDTO {
    id: number;
    car: CarModel[];
    total: number;
    limit: number;
    offset: number;
    offsets: number;

    constructor(cars: CarsModel) {
        this.id = cars.id;
        this.car = cars.car;
        this.total = cars.total;
        this.limit = cars.limit;
        this.offset = cars.offset;
        this.offsets = cars.offsets;
    }
}
