import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CreateTicketTable1725491879139 } from './migration/1725491879139-createTicketTable';
import { CreateMovieTable1725491979789 } from './migration/1725491979789-createMovieTable';
import { CreateSessionTable1725491752383 } from './migration/1725491752383-createSessionTable';
import MovieModel from '../api/models/MovieModel';
import SesssionModel from '../api/models/SesssionModel';
import TicketModel from '../api/models/TicketModel';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [MovieModel, SesssionModel, TicketModel],
  migrations: [
    CreateMovieTable1725491979789,
    CreateSessionTable1725491752383,
    CreateTicketTable1725491879139,
  ],
  subscribers: [],
});
