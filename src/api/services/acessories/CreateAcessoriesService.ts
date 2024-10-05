import { AppDataSource } from 'src/database/data-source-cli';
import AcessoriesDTO from 'src/api/dtos/AcessoriesDTO';
import { IAcessoriesCreateRequest } from 'src/api/interfaces/IAcessoriesCreateRequest';
import AcessoriesModel from 'src/api/models/AcessoriesModel';

class CreateAcessoriesService {
    public async execute({
        carId,
        name,
    }: IAcessoriesCreateRequest): Promise<AcessoriesDTO> {
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
export default CreateAcessoriesService;
