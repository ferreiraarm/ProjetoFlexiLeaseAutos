import { AppDataSource } from '../../../database/data-source-cli';
import CarDTO from '../../dtos/CarDTO';
import { ICarListIdRequest } from '../../interfaces/ICarListIdRequest';
import CarModel from '../../models/CarModel';

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
