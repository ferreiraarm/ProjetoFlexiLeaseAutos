import { AppDataSource } from '../../../database/data-source-cli';
import UserDTO from '../../dtos/UserDTO';
import { IUserCreateRequest } from '../../interfaces/IUserCreateRequest';
import UserModel from '../../models/UserModel';

class CreateUserService {
    public async execute({
        name,
        cpf,
        birth,
        cep,
        email,
        password,
    }: IUserCreateRequest): Promise<UserDTO> {
        const userRepository = AppDataSource.getRepository(UserModel);
        const user = await userRepository.create({
            name,
            cpf,
            birth,
            cep,
            email,
            password,
        });
        await userRepository.save(user);
        return new UserDTO(user);
    }
}
export default CreateUserService;
