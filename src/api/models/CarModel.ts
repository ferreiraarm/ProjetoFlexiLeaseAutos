import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Cars from './CarsModel';
import Acessories from './AcessoriesModel';
@Entity('car')
class CarModel {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cars, (cars) => cars.car, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'cars_id' })
    cars: Cars;

    @Column({ type: 'varchar' })
    model: string;

    @Column({ type: 'varchar' })
    color: string;

    @Column({ type: 'int' })
    year: number;

    @Column({ type: 'int' })
    valuePerDay: number;

    @OneToMany(() => Acessories, (acessories) => acessories.car, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'acessories_id' })
    acessories: Acessories[];

    @Column({ type: 'int' })
    numberOfPassengers: number;
}

export default CarModel;
