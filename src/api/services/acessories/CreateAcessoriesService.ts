import { AppDataSource } from '../../../database/data-source-cli';
import AcessoriesDTO from '../../dtos/AcessoriesDTO';
import { APIError } from '../../error/APIError';
import { IAcessoriesCreateRequest } from '../../interfaces/IAcessoriesCreateRequest';
import AcessoriesModel from '../../models/AcessoriesModel';
import CarModel from '../../models/CarModel';
import CarsRepository from '../../repositories/CarsRepository';

class CreateAcessoriesService {
    public async execute({
        name,
        car_id,
    }: IAcessoriesCreateRequest): Promise<AcessoriesDTO | APIError> {
        try {
            const acessoriesRepository =
                AppDataSource.getRepository(AcessoriesModel);

            const carRepository = AppDataSource.getRepository(CarModel);
            const car = await carRepository.findOne({ where: { id: car_id } });

            if (!car) {
                return {
                    code: 404,
                    status: 'Car not found',
                    message: 'Carro não encontrado',
                };
            }
            console.log(car);

            const acessories = await acessoriesRepository.create({
                car,
                name,
            });
            console.log(acessories);
            await acessoriesRepository.save(acessories);
            return new AcessoriesDTO(acessories);
        } catch (error) {
            return {
                code: 500,
                status: 'Internal Server Error',
                message: 'Ocorreu um erro inesperado.',
            };
        }
    }
}
export default CreateAcessoriesService;
