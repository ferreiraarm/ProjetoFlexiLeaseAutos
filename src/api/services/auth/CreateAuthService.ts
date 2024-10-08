import { AppDataSource } from '../../../database/data-source-cli';
import { IAuthCreateRequest } from '../../interfaces/IAuthCreateRequest';
import AuthModel from '../../models/AuthModel';

class CreateAuthService {
    public async execute({
        email,
        password,
    }: IAuthCreateRequest): Promise<string> {
        const authRepository = AppDataSource.getRepository(AuthModel);
        const auth = await authRepository.create({ email, password });
        await authRepository.save(auth);

        // return { acesstokemn: 'ddddd' };
        return new Promise(() => 'r');
    }
}
export default CreateAuthService;
