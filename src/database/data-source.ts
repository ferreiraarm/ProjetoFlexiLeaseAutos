import 'reflect-metadata';
import { DataSource } from 'typeorm';
import AcessoriesModel from '../api/models/AcessoriesModel';
import AuthModel from '../api/models/AuthModel';
import CarModel from '../api/models/CarModel';
import CarsModel from '../api/models/CarsModel';
import ReserveModel from '../api/models/ReserveModel';
import ReservesModel from '../api/models/ReservesModel';
import UserModel from '../api/models/UserModel';
import { CreateCarModelTable1727976244334 } from './migrations/1727976244334-CreateCarModelTable';
import { CreateAcessoriesModelTable1727976285179 } from './migrations/1727976285179-CreateAcessoriesModelTable';
import { CreateAuthModelTable1727976307975 } from './migrations/1727976307975-CreateAuthModelTable';
import { CreateCarsModelTable1727976339965 } from './migrations/1727976339965-CreateCarsModelTable';
import { CreateReserveModelTable1727976361704 } from './migrations/1727976361704-CreateReserveModelTable';
import { CreateReservesModelTable1727976392008 } from './migrations/1727976392008-CreateReservesModelTable';
import { CreateUserModelTable1727976414328 } from './migrations/1727976414328-CreateUserModelTable';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'dbFlexileaseAutos.sqlite',
  synchronize: true,
  logging: false,
  entities: [
    AcessoriesModel,
    AuthModel,
    CarModel,
    CarsModel,
    ReserveModel,
    ReservesModel,
    UserModel,
  ],
  migrations: [
    CreateCarModelTable1727976244334,
    CreateAcessoriesModelTable1727976285179,
    CreateAuthModelTable1727976307975,
    CreateCarsModelTable1727976339965,
    CreateReserveModelTable1727976361704,
    CreateReservesModelTable1727976392008,
    CreateUserModelTable1727976414328,
  ],
  subscribers: [],
});
