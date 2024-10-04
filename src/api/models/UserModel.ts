import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ type: 'date' })
  birth: Date;

  @Column()
  cep: number;

  @Column({ unique: true })
  email: string; //verificar tipos de email e pass

  @Column({ select: false })
  password: string;
}

export default UserModel;
