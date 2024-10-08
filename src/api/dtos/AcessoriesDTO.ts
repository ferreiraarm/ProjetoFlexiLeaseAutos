import AcessoriesModel from '../models/AcessoriesModel';

export default class AcessoriesDTO {
    id: number;

    name: string;

    constructor(acessories: AcessoriesModel) {
        this.id = acessories.id;

        this.name = acessories.name;
    }
}
