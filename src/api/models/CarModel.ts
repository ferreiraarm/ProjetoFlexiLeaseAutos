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
import { IsNotEmpty, Min, Max } from 'class-validator';
@Entity('car')
class CarModel {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cars, (cars) => cars.car, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'cars_id' })
    cars: Cars;

    @IsNotEmpty()
    @Column({ type: 'varchar' })
    model: string;

    @IsNotEmpty()
    @Column({ type: 'varchar' })
    color: string;

    @Min(1950)
    @Max(2023)
    @IsNotEmpty()
    @Column({ type: 'int' })
    year: number;

    @IsNotEmpty()
    @Column({ type: 'int' })
    valuePerDay: number;

    @OneToMany(() => Acessories, (acessories) => acessories.car, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'acessories_id' })
    acessories: Acessories[];

    @IsNotEmpty()
    @Column({ type: 'int' })
    numberOfPassengers: number;
}

export default CarModel;
