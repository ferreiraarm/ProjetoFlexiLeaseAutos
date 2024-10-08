import ReserveModel from '../models/ReserveModel';

export default class ReserveDTO {
    id: number;
    startDate: Date;
    endDate: Date;
    finalValue: number;
    userId: number;
    carId: number;
    reservesId: number;

    constructor(reserve: ReserveModel) {
        this.id = reserve.id;
        this.startDate = reserve.startDate;
        this.endDate = reserve.endDate;
        this.finalValue = reserve.finalValue;
        this.userId = reserve.userId;
        this.carId = reserve.carId;
        this.reservesId = reserve.reserves.id;
    }
}
