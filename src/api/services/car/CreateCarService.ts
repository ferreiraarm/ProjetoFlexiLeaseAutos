import { AppDataSource } from 'src/database/data-source-cli';
import CarDTO from 'src/api/dtos/CarDTO';
import { ICarCreateRequest } from 'src/api/interfaces/ICarCreateRequest';
import CarModel from 'src/api/models/CarModel';

class CreateCarService {
    public async execute({
        model,
        color,
        year,
        valuePerDay,
        numberOfPassengers,
    }: ICarCreateRequest): Promise<CarDTO> {
        const carRepository = AppDataSource.getRepository(CarModel);
        const car = await carRepository.create({
            model,
            color,
            year,
            valuePerDay,
            numberOfPassengers,
        });
        await carRepository.save(car);
        return new CarDTO(car);
    }
}
export default CreateCarService;
