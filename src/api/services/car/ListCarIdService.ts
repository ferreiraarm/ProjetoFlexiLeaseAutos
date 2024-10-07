import CarDTO from 'src/api/dtos/CarDTO';
import { ICarListIdRequest } from 'src/api/interfaces/ICarListIdRequest';
import CarModel from 'src/api/models/CarModel';
import { AppDataSource } from 'src/database/data-source-cli';

class ListCarIdService {
    public async execute({ id }: ICarListIdRequest): Promise<CarDTO> {
        const carRepository = AppDataSource.getRepository(CarModel);
        const car = await carRepository.findOne({
            where: { id: id },
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
export default ListCarIdService;
