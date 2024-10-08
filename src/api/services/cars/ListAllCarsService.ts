import { AppDataSource } from '../../../database/data-source-cli';
import CarsDTO from '../../dtos/CarsDTO';
import CarsModel from '../../models/CarsModel';

class ListAllCarsService {
    public async execute(): Promise<CarsDTO[]> {
        const carsRepository = AppDataSource.getRepository(CarsModel);
        const cars = await carsRepository.find({
            select: {
                id: true,
                total: true,
                limit: true,
                offset: true,
                offsets: true,
            },
            relations: {
                car: {
                    acessories: true,
                },
            },
            order: {
                id: 'ASC',
                car: {
                    id: 'ASC',
                    acessories: {
                        id: 'ASC',
                    },
                },
            },
        });

        if (!cars) {
            throw new Error('nf');
        }
        return cars;
    }
}
export default ListAllCarsService;
