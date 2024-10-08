import { AppDataSource } from '../../../database/data-source-cli';
import CarsDTO from '../../dtos/CarsDTO';
import { ICarsCreateResquest } from '../../interfaces/ICarsCreateResquest';
import CarsModel from '../../models/CarsModel';

class CreateCarsService {
    public async execute({
        total,
        limit,
        offset,
        offsets,
    }: ICarsCreateResquest): Promise<CarsDTO> {
        const carsRepository = AppDataSource.getRepository(CarsModel);
        const cars = await carsRepository.create({
            total,
            limit,
            offset,
            offsets,
        });

        await carsRepository.save(cars);
        return new CarsDTO(cars);
    }
}
export default CreateCarsService;
