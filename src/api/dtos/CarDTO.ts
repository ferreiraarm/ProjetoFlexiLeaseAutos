import AcessoriesModel from '../models/AcessoriesModel';
import CarModel from '../models/CarModel';

export default class CarDTO {
  id: number;
  cars_id: number;
  model: string;
  color: string;
  ano: number;
  valuePerDay: number;
  acessories: AcessoriesModel[];
  numberOfPassengers: number;

  constructor(car: CarModel) {
    this.id = car.id;
    this.cars_id = car.cars.id;
    this.model = car.model;
    this.color = car.color;
    this.ano = car.ano;
    this.valuePerDay = car.valuePerDay;
    this.acessories = car.acessories;
  }
}
