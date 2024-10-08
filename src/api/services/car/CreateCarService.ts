import { AppDataSource } from '../../../database/data-source-cli';
import CarDTO from '../../dtos/CarDTO';
import { ICarCreateRequest } from '../../interfaces/ICarCreateRequest';
import CarModel from '../../models/CarModel';
import CarsModel from '../../models/CarsModel';

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
