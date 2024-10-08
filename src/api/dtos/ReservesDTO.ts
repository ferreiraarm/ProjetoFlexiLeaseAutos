import ReserveModel from '../models/ReserveModel';
import ReservesModel from '../models/ReservesModel';

export default class ReservesDTO {
    id: number;
    reserve: ReserveModel[];
    total: number;
    limit: number;
    offset: number;
    offsets: number;

    constructor(reserves: ReservesModel) {
        this.id = reserves.id;
        this.reserve = reserves.reserve;
        this.total = reserves.total;
        this.limit = reserves.limit;
        this.offset = reserves.offset;
        this.offsets = reserves.offsets;
    }
}
