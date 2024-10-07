import { DataSource, Repository } from 'typeorm';
import CarModel from '../models/CarModel';

class CarsRepository extends Repository<CarModel> {
    constructor(private dataSource: DataSource) {
        super(CarModel, dataSource.createEntityManager());
    }

    public async findByModel(model: string): Promise<CarModel | null> {
        const car = await this.findOne({
            where: { model },
        });

        return car;
    }

    public async findByColor(color: string): Promise<CarModel | null> {
        const car = await this.findOne({
            where: { color },
        });

        return car;
    }

    public async findByYear(year: number): Promise<CarModel | null> {
        const car = await this.findOne({
            where: { year },
        });

        return car;
    }

    public async findByValuePerDat(
        valuePerDay: number,
    ): Promise<CarModel | null> {
        const car = await this.findOne({
            where: { valuePerDay },
        });

        return car;
    }
    public async findByNumberOfPassengers(
        numberOfPassengers: number,
    ): Promise<CarModel | null> {
        const car = await this.findOne({
            where: { numberOfPassengers },
        });

        return car;
    }
}
export default CarsRepository;
