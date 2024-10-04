import AuthModel from '../models/AuthModel';

export default class AuthDTO {
  id: number;
  email: string;
  password: string;

  constructor(auth: AuthModel) {
    this.id = auth.id;
    this.email = auth.email;
  }
}
