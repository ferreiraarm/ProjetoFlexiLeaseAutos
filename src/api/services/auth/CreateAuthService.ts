import { IAuthCreateRequest } from 'src/api/interfaces/IAuthCreateRequest';
import AuthModel from 'src/api/models/AuthModel';
import { AppDataSource } from 'src/database/data-source-cli';

class CreateAuthService {
    public async execute({
        email,
        password,
    }: IAuthCreateRequest): Promise<JSON> {
        const authRepository = AppDataSource.getRepository(AuthModel);
        const auth = await authRepository.create({ email, password });
        await authRepository.save(auth);

        return { acesstokemn: 'ddddd' };
    }
}
export default CreateAuthService;
