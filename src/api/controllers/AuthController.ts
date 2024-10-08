import { Request, Response } from 'express';
import CreateAuthService from '../services/auth/CreateAuthService';

class AuthController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { email, password } = request.body;

        const createAtuh = new CreateAuthService();
        const auth = await createAtuh.execute({ email, password });
        return response.json(auth);
    }
}
export default AuthController;
