import { Column, Entity, OneToMany } from 'typeorm';
import Car from './CarModel';
@Entity('cars')
class CarsModel {
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
