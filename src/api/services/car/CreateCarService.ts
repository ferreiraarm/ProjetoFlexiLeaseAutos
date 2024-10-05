import { AppDataSource } from 'src/database/data-source-cli';
import CarDTO from 'src/api/dtos/CarDTO';
import { ICarCreateRequest } from 'src/api/interfaces/ICarCreateRequest';
import CarModel from 'src/api/models/CarModel';
import CarsModel from 'src/api/models/CarsModel';

class CreateCarService {
    public async execute({
        model,
        color,
        year,
        valuePerDay,
        numberOfPassengers,
        carsId,
    }: ICarCreateRequest): Promise<CarDTO> {
        const carsRepository = AppDataSource.getRepository(CarsModel);
        const cars = await carsRepository.findOne({
            where: { id: carsId },
        });

        if (!cars) {
            throw new Error('Cars not found');
        }

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
