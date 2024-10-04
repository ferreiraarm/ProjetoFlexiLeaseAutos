import ReserveModel from '../models/ReserveModel';

export default class ReserveDTO {
  id: number;
  startDate: Date;
  endDate: Date;
  finalDate: Date;
  userId: number;
  carId: number;

  constructor(reserve: ReserveModel) {
    this.id = reserve.id;
    this.startDate = reserve.startDate;
    this.endDate = reserve.endDate;
    this.finalDate = reserve.finalDate;
    this.userId = reserve.userId;
    this.carId = reserve.carId;
  }
}
