import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class ReserveModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  finalDate: Date;

  @Column()
  userId: number;

  @Column()
  carId: number;
}

export default ReserveModel;
