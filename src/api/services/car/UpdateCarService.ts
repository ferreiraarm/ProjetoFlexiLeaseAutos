import { AppDataSource } from 'src/database/data-source-cli';
import CarDTO from 'src/api/dtos/CarDTO';
import { ICarUpdateRequest } from 'src/api/interfaces/ICarUpdateRequest';
import CarModel from 'src/api/models/CarModel';

class UpdateCarService {
    public async execute({
        id,
        model,
        color,
        year,
        valuePerDay,
        numberOfPassengers,
    }: ICarUpdateRequest): Promise<CarDTO> {
        const carRepository = AppDataSource.getRepository(CarModel);
        const car = await carRepository.findOne({
            where: { id },
        });

        if (!car) {
            throw new Error('car not found');
        }

        car.model = model;
        car.color = color;
        car.year = year;
        car.valuePerDay = valuePerDay;
        car.numberOfPassengers = numberOfPassengers;

        await carRepository.save(car);
        return new CarDTO(car);
    }
}

export default UpdateCarService;
