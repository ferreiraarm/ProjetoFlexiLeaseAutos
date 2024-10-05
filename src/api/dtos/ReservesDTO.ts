import ReserveModel from '../models/ReserveModel';
import ReservesModel from '../models/ReservesModel';

export default class ReservesDTO {
    reserve: ReserveModel[];
    total: number;
    limit: number;
    offset: number;
    offsets: number;

    constructor(reserves: ReservesModel) {
        this.reserve = reserves.reserve;
        this.total = reserves.total;
        this.limit = reserves.limit;
        this.offset = reserves.offset;
        this.offsets = reserves.offsets;
    }
}
