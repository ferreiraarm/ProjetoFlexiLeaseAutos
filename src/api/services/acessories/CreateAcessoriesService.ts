import { AppDataSource } from '../../../database/data-source-cli';
import AcessoriesDTO from '../../dtos/AcessoriesDTO';
import { APIError } from '../../error/APIError';
import { IAcessoriesCreateRequest } from '../../interfaces/IAcessoriesCreateRequest';
import AcessoriesModel from '../../models/AcessoriesModel';

class CreateAcessoriesService {
    public async execute({
        name,
    }: IAcessoriesCreateRequest): Promise<AcessoriesDTO | APIError> {
        try {
            const acessoriesRepository =
                AppDataSource.getRepository(AcessoriesModel);

            const acessories = await acessoriesRepository.create({
                name,
            });

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
