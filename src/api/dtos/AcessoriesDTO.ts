import AcessoriesModel from '../models/AcessoriesModel';

export default class AcessoriesDTO {
    id: number;

    carId: number;
    name: string;

    constructor(acessories: AcessoriesModel) {
        this.id = acessories.id;

        this.carId = acessories.car.id;
        this.name = acessories.name;
    }
}
