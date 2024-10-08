export interface IReserveUpdateRequest {
    id: number;
    startDate: Date;
    endDate: Date;
    finalValue: number;
    reservesId: number;
    carId: number;
}
