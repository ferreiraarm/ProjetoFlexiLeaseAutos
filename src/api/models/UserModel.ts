import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class UserModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ unique: true, type: 'varchar' })
    cpf: string;

    @Column({ type: 'date' })
    birth: Date;

    @Column({ type: 'int' })
    cep: number;

    @Column({ unique: true, type: 'text' })
    email: string; //verificar tipos de email e pass

    @Column({ select: false, type: 'varchar' })
    password: string;
}

//salvar viacep no banco

export default UserModel;
