import AcessoriesModel from '../models/AcessoriesModel';

export default class AcessoriesDTO {
  id: number;
  name: string;
  car_id: number;

  constructor(acessories: AcessoriesModel) {
    this.id = acessories.id;
    this.name = acessories.name;
    this.car_id = acessories.car.id;
  }
}
