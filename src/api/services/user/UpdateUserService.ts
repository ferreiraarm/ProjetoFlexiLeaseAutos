import { AppDataSource } from 'src/database/data-source-cli';
import UserDTO from 'src/api/dtos/UserDTO';
import UserModel from 'src/api/models/UserModel';

import { IUserUpdateRequest } from 'src/api/interfaces/IUserUpdateRequest';

class UpdadeUserService {
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

export default UpdadeUserService;
