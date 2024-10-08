import { AppDataSource } from '../../../database/data-source-cli';
import UserDTO from '../../dtos/UserDTO';
import { IUserDeleteEListRequest } from '../../interfaces/IUserDeleteEListRequest';
import UserModel from '../../models/UserModel';

class ListUserService {
    public async execute({ id }: IUserDeleteEListRequest): Promise<UserDTO> {
        const userRepository = AppDataSource.getRepository(UserModel);
        const user = await userRepository.findOne({
            where: { id },
        });

        if (!user) {
            throw new Error('nf');
        }

        return new UserDTO(user);
    }
}
export default ListUserService;
