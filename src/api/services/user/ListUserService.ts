import UserDTO from 'src/api/dtos/UserDTO';
import { AppDataSource } from 'src/database/data-source-cli';
import UserModel from 'src/api/models/UserModel';
import { IUserDeleteEListRequest } from 'src/api/interfaces/IUserDeleteEListRequest';

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
