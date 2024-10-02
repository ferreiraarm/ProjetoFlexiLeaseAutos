import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class AuthModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;
}

export default AuthModel;
