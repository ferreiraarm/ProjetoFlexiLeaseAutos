import CarDTO from 'src/api/dtos/CarDTO';
import CarModel from 'src/api/models/CarModel';
import { AppDataSource } from 'src/database/data-source-cli';

class ListCarService {
    public async execute(id: number): Promise<CarDTO> {
        const carRepository = AppDataSource.getRepository(CarModel);
        const car = await carRepository.findOne({
            where: { id },
            relations: {
                acessories: true,
            },
        });

        if (!car) {
            throw new Error('car not found');
        }

        return new CarDTO(car);
    }
}
export default ListCarService;
