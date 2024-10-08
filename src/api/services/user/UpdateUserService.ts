import { AppDataSource } from '../../../database/data-source-cli';
import UserDTO from '../../dtos/UserDTO';
import { IUserUpdateRequest } from '../../interfaces/IUserUpdateRequest';
import UserModel from '../../models/UserModel';

class UpdateUserService {
    public async execute({
        id,
        name,
        cpf,
        birth,
        cep,
        email,
        password,
    }: IUserUpdateRequest): Promise<UserDTO> {
        const userRepository = AppDataSource.getRepository(UserModel);
        const user = await userRepository.findOne({
            where: { id },
        });
        if (!user) {
            throw new Error('nf');
        }
        await userRepository.update(user.id, {
            name,
            cpf,
            birth,
            cep,
            email,
            password,
        });

        return new UserDTO(user);
    }
}

export default UpdateUserService;
