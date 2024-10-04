import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from 'typeorm';
import Reserve from './ReserveModel';
@Entity('reserves')
class ReservesModel {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Reserve, (reserve) => reserve.reserves)
    reserve: Reserve[];

    @Column({ type: 'int' })
    total: number;

    @Column({ type: 'int' })
    limit: number;

    @Column({ type: 'int' })
    offset: number;

    @Column({ type: 'int' })
    offsets: number;
}
export default ReservesModel;
