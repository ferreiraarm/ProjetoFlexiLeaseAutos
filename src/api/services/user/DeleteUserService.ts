import { AppDataSource } from 'src/database/data-source-cli';

import UserModel from 'src/api/models/UserModel';

class DeleteUserService {
    public async execute(id: number): Promise<void> {
        const userRepository = AppDataSource.getRepository(UserModel);
        const user = await userRepository.findOne({ where: { id } });

        if (!user) {
            throw new Error('nf');
        }
        await userRepository.remove(user);
    }
}
export default DeleteUserService;
