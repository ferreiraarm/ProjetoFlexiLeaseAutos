import { Request, Response } from 'express';
import CreateReserveService from '../services/reserve/CreateReserveService';
import UpdateReserveService from '../services/reserve/UpdateReserveService';
import DeleteReserveService from '../services/reserve/DeleteReserveService';
import ListReserveIdService from '../services/reserve/ListReserveIdService';
import ReservesRepository from '../repositories/ReservesRepository';

import ListReserveCarIdService from '../services/reserve/ListReserveCarIdService';
import ListReserveEndDateService from '../services/reserve/ListReserveEndDateService';

import ListReserveFinalDateService from '../services/reserve/ListReserveFinalDateService';
import ListReserveStartDateService from '../services/reserve/ListReserveStardDateService';
import ListReserveUserIDService from '../services/reserve/ListReserveUserIdService';
import { AppDataSource } from '../../database/data-source-cli';

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

        const listReserve = new ListReserveIdService();
        const reserve = await listReserve.execute({ id });
        return response.json(reserve);
    }

    public async listReserveCarId(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const carId = parseInt(request.params.carId);
        const reserveRepository = new ReservesRepository(AppDataSource);

        const listReserve = new ListReserveCarIdService(reserveRepository);
        const reserve = await listReserve.finByCarId({
            carId,
        });
        return response.json(reserve);
    }

    public async listReserveEndDate(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const endDate = new Date(request.params.endDate);
        const reserveRepository = new ReservesRepository(AppDataSource);

        const listReserve = new ListReserveEndDateService(reserveRepository);
        const reserve = await listReserve.finByEndDate({
            endDate,
        });
        return response.json(reserve);
    }

    public async listReserveFinalDate(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const finalDate = new Date(request.params.finalDate);
        const reserveRepository = new ReservesRepository(AppDataSource);

        const listReserve = new ListReserveFinalDateService(reserveRepository);
        const reserve = await listReserve.finByFinalDate({
            finalDate,
        });
        return response.json(reserve);
    }

    public async listReserveStartDate(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const startDate = new Date(request.params.startDate);
        const reserveRepository = new ReservesRepository(AppDataSource);

        const listReserve = new ListReserveStartDateService(reserveRepository);
        const reserve = await listReserve.finByStartDate({
            startDate,
        });
        return response.json(reserve);
    }

    public async listReserveUserId(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const userId = parseInt(request.params.userId);
        const reserveRepository = new ReservesRepository(AppDataSource);

        const listReserve = new ListReserveUserIDService(reserveRepository);
        const reserve = await listReserve.finByUserId({
            userId,
        });
        return response.json(reserve);
    }
}

export default ReserveController;
