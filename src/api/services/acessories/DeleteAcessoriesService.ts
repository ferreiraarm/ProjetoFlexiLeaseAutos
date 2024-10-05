import { AppDataSource } from 'src/database/data-source-cli';
import AcessoriesModel from 'src/api/models/AcessoriesModel';

class DeleteAcessoriesService {
    public async execute(id: number): Promise<void> {
        const acessoriesRepository =
            AppDataSource.getMongoRepository(AcessoriesModel);
        const acessories = await acessoriesRepository.findOne({
            where: { id },
        });

        if (!acessories) {
            throw new Error('Acessorio Not Found');
        }

        await acessoriesRepository.remove(acessories);
    }
}

export default DeleteAcessoriesService;
