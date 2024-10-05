import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Car from './CarModel';
@Entity('acessories')
class AcessoriesModel {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Car, (car) => car.acessories, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'car_id' })
    car: Car;

    @Column({ type: 'varchar', unique: true })
    name: string;
}

export default AcessoriesModel;
