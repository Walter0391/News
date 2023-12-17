export class Login {
  constructor(public email: string = '', public password: string = '') {}
}

export type User = {
  id: number;
  email: string;
};

export type LogUser = {
  user: User;
};
