import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
class CarsModel {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Car, (car) => car.cars)
  car: Car[];

  @Column()
  total: number;

  @Column()
  limit: number;

  @Column()
  offset: number;

  @Column()
  offsets: number;
}

export default CarsModel;
