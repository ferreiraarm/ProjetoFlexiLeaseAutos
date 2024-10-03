import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reserves')
class ReservesModel {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Reserve, (reserve) => reserve.reserves)
  reserves: Reserve[];

  @Column()
  total: number;

  @Column()
  limit: number;

  @Column()
  offset: number;

  @Column()
  offsets: number;
}
export default ReservesModel;
