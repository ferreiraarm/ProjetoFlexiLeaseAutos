import { DataSource, Repository } from 'typeorm';

import ReserveModel from '../models/ReserveModel';

class ReservesRepository extends Repository<ReserveModel> {
    constructor(private dataSource: DataSource) {
        super(ReserveModel, dataSource.createEntityManager());
    }
    public async findByStartDate(
        startDate: Date,
    ): Promise<ReserveModel | null> {
        const reserve = await this.findOne({
            where: { startDate },
        });

        return reserve;
    }

    public async findByEndDate(endDate: Date): Promise<ReserveModel | null> {
        const reserve = await this.findOne({
            where: { endDate },
        });

        return reserve;
    }
    public async findByFinalDate(
        finalDate: Date,
    ): Promise<ReserveModel | null> {
        const reserve = await this.findOne({
            where: { finalDate },
        });

        return reserve;
    }
    public async findByUserId(userId: number): Promise<ReserveModel | null> {
        const reserve = await this.findOne({
            where: { userId },
        });

        return reserve;
    }
    public async findByCarId(carId: number): Promise<ReserveModel | null> {
        const reserve = await this.findOne({
            where: { carId },
        });

        return reserve;
    }
}
export default ReservesRepository;
