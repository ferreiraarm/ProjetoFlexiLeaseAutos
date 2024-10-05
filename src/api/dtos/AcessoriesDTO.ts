import AcessoriesModel from '../models/AcessoriesModel';

export default class AcessoriesDTO {
    id: number;

    car_id: number;
    name: string;

    constructor(acessories: AcessoriesModel) {
        this.id = acessories.id;

        this.car_id = acessories.car.id;
        this.name = acessories.name;
    }
}
