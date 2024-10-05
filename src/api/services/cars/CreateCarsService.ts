import CarsModel from 'src/api/models/CarsModel';
import { AppDataSource } from 'src/database/data-source-cli';
import CarsDTO from 'src/api/dtos/CarsDTO';
import { ICarsCreateResquest } from 'src/api/interfaces/ICarsCreateResquest';

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
