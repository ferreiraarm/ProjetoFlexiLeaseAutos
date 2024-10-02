import {
  Column,
  Entity,
  JoinColumn, 
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('car')
class CarModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cars, (car) => cars.car, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cars_id' })
  cars: Cars;

  @Column()
  model: string;

  @Column()
  color: string;

  @Column()
  ano: number;

  @Column()
  valuePerDay: number;

  @OneToMany(() => Acessories, (acessories) => acessories.car,  onUpdate: "CASCADE",)
  acessories: Acessories[];

  @Column()
  numberOfPassengers: number;
}

export default CarModel;