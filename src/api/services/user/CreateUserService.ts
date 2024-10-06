import { AppDataSource } from 'src/database/data-source-cli';
import UserDTO from 'src/api/dtos/UserDTO';
import UserModel from 'src/api/models/UserModel';
import { IUserCreateRequest } from 'src/api/interfaces/IUserCreateRequest';

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
