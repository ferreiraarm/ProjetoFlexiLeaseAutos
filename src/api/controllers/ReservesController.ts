import { Request, Response } from 'express';
import CreateReservesService from '../services/reserves/CreateReservesService';
import DeleteReservesService from '../services/reserves/DeleteReservesService';
import ListAllReservesService from '../services/reserves/ListAllReservesService';

class ReservesController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { total, limit, offset, offsets } = request.body;

        const createReserves = new CreateReservesService();
        const reserves = await createReserves.execute({
            total,
            limit,
            offset,
            offsets,
        });

        return response.json(reserves);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);

        const deleteReserves = new DeleteReservesService();
        await deleteReserves.execute({ id });
        return response.status(204).send();
    }

    public async listReserves(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listReserves = new ListAllReservesService();
        const reserves = await listReserves.execute();
        return response.json(reserves);
    }
}
export default ReservesController;
