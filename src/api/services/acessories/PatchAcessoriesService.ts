import { AppDataSource } from 'src/database/data-source-cli';
import { IAcessoriesPacthRequest } from 'src/api/interfaces/IAcessoriesPacthRequest';
import AcessoriesDTO from 'src/api/dtos/AcessoriesDTO';

import AcessoriesModel from 'src/api/models/AcessoriesModel';

class PatchAcessoriesService {
    public async execute({
        name,
        carId,
    }: IAcessoriesPacthRequest): Promise<AcessoriesDTO> {
        const acessoriesRepository =
            AppDataSource.getRepository(AcessoriesModel);
        const acessories = await acessoriesRepository.findOne({
            where: { id: carId },
        });

        if (!acessories) {
            throw new Error('acessories not found');
        }

        acessories.name = name;

        await acessoriesRepository.save(acessories);
        return new AcessoriesDTO(acessories);
    }
}
export default PatchAcessoriesService;
