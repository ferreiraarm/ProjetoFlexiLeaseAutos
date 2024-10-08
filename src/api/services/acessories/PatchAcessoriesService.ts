import { AppDataSource } from '../../../database/data-source-cli';
import AcessoriesDTO from '../../dtos/AcessoriesDTO';
import { APIError } from '../../error/APIError';
import { IAcessoriesPacthRequest } from '../../interfaces/IAcessoriesPacthRequest';
import AcessoriesModel from '../../models/AcessoriesModel';

class PatchAcessoriesService {
    public async execute({
        name,
        carId,
    }: IAcessoriesPacthRequest): Promise<AcessoriesDTO | APIError> {
        const acessoriesRepository =
            AppDataSource.getRepository(AcessoriesModel);
        const acessories = await acessoriesRepository.findOne({
            where: { id: carId },
        });

        if (!acessories) {
            return {
                code: 404,
                status: 'Not Found',
                message: 'O acessório não foi encontrado.',
            };
        } else {
            acessories.name = name;
        }

        await acessoriesRepository.save(acessories);
        return new AcessoriesDTO(acessories);
    }
}
export default PatchAcessoriesService;
