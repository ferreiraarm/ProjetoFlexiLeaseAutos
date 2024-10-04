import UserModel from '../models/UserModel';

export default class UserDTO {
  id: number;
  name: string;
  cpf: string;
  birth: Date;
  cep: number;
  email: string;

  constructor(user: UserModel) {
    this.id = user.id;
    this.name = user.name;
    this.cpf = user.cpf;
    this.birth = user.birth;
    this.cep = user.cep;
    this.email = user.email;
    // cep api add
  }
}
