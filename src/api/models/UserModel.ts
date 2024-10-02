import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  cpf: number;

  @Column()
  name: string;

  @Column({ unique: true })
  cpf: string;

  birth: Date;

  @Column({ unique: true })
  email: string;

  @Column()
  qualified: true;

  @Column()
  cep: number;

  @Column()
  neighbordhood: string;

  @Column()
  complement: string;

  @Column()
  city: string;

  @Column()
  uf: string;
}

export default UserModel;
