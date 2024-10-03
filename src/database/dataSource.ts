import 'reflect-metadata';
import { DataSource } from 'typeorm';
import AcessoriesModel from '../api/models/AcessoriesModel';
import AuthModel from '../api/models/AuthModel';
import CarModel from '../api/models/CarModel';
import CarsModel from '../api/models/CarsModel';
import ReserveModel from '../api/models/ReserveModel';
import ReservesModel from '../api/models/ReservesModel';
import UserModel from '../api/models/UserModel';

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
  migrations: [],
  subscribers: [],
});
