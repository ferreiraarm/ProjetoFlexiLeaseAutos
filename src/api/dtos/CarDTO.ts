import AcessoriesModel from '../models/AcessoriesModel';
import CarModel from '../models/CarModel';

export default class CarDTO {
    id: number;
    carsId: number;
    model: string;
    color: string;
    year: number;
    valuePerDay: number;
    acessories: AcessoriesModel[];
    numberOfPassengers: number;

    constructor(car: CarModel) {
        this.id = car.id;
        this.carsId = car.cars.id;
        this.model = car.model;
        this.color = car.color;
        this.year = car.year;
        this.valuePerDay = car.valuePerDay;
        this.acessories = car.acessories;
        this.numberOfPassengers = car.numberOfPassengers;
    }
}
