import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
class AuthModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  email: string;

  @Column({ select: false, type: 'varchar' })
  password: string;
}

export default AuthModel;
