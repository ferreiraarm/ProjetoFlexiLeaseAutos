import { AppDataSource } from '../../../database/data-source-cli';
import { IUserDeleteEListRequest } from '../../interfaces/IUserDeleteEListRequest';
import UserModel from '../../models/UserModel';

class DeleteUserService {
    public async execute({ id }: IUserDeleteEListRequest): Promise<void> {
        const userRepository = AppDataSource.getRepository(UserModel);
        const user = await userRepository.findOne({ where: { id } });

        if (!user) {
            throw new Error('nf');
        }
        await userRepository.remove(user);
    }
}
export default DeleteUserService;
