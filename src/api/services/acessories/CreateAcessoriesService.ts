import { AppDataSource } from 'src/database/data-source-cli';
import AcessoriesDTO from 'src/api/dtos/AcessoriesDTO';
import { IAcessoriesCreateRequest } from 'src/api/interfaces/IAcessoriesCreateRequest';
import AcessoriesModel from 'src/api/models/AcessoriesModel';

class CreateAcessoriesService {
    public async execute({
        car_id,
        name,
    }: IAcessoriesCreateRequest): Promise<AcessoriesDTO> {
        const acessoriesRepository =
            AppDataSource.getRepository(AcessoriesModel);
        const acessories = await acessoriesRepository.findOne({
            where: { id: car_id },
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
