import CarDTO from 'src/api/dtos/CarDTO';
import { ICarListRequest } from 'src/api/interfaces/ICarListRequest';
import CarModel from 'src/api/models/CarModel';
import { AppDataSource } from 'src/database/data-source-cli';

class ListCarService {
    public async execute({ id }: ICarListRequest): Promise<CarDTO> {
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
