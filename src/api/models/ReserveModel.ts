import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import Reserves from './ReservesModel';
@Entity('reserve')
class ReserveModel {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Reserves, (reserves) => reserves.reserve, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'reserves_id' })
    reserves: Reserves;

    @Column({ type: 'date' })
    startDate: Date;

    @Column({ type: 'date' })
    endDate: Date;

    @Column({ type: 'date' })
    finalValue: number;

    @Column({ type: 'int' })
    userId: number;

    @Column({ type: 'int' })
    carId: number; //escrever as referencias
}

export default ReserveModel;
