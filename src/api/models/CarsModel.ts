import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Car from './CarModel';
@Entity('cars')
class CarsModel {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Car, (car) => car.cars)
  car: Car[];

  @Column({ type: 'int' })
  total: number;

  @Column({ type: 'int' })
  limit: number;

  @Column({ type: 'int' })
  offset: number;

  @Column({ type: 'int' })
  offsets: number;
}

export default CarsModel;
