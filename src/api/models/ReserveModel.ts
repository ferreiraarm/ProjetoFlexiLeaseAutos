import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reserve')
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
  carId: number; //escrever as referencias
}

export default ReserveModel;
