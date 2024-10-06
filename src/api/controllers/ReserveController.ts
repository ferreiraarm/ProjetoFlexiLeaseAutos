import { Request, Response } from 'express';
import CreateReserveService from '../services/reserve/CreateReserveService';
import UpdateReserveService from '../services/reserve/UpdateReserveService';
import ListReserveService from '../services/reserve/ListReserveService';
import DeleteReserveService from '../services/reserve/DeleteReserveService';

class ReserveController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { startDate, endDate, carId, reservesId } = request.body;

        const createReserve = new CreateReserveService();
        const reserve = await createReserve.execute({
            startDate,
            endDate,
            carId,
            reservesId,
        });
        return response.json(reserve);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);
        const { startDate, endDate, carId, reservesId } = request.body;

        const updateReserve = new UpdateReserveService();
        const reserve = updateReserve.execute({
            id,
            startDate,
            endDate,
            carId,
            reservesId,
        });

        return response.json(reserve);
    }

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);
        const reservesId = request.body;

        const deleteReserve = new DeleteReserveService();
        await deleteReserve.execute({ id, reservesId });
        return response.status(204).send();
    }

    public async listReserveId(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id = parseInt(request.params.id);

        const listReserve = new ListReserveService();
        const reserve = await listReserve.execute({ id });
        return response.json(reserve);
    }
}

export default ReserveController;
