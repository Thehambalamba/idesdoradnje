export class LogInModel {
  username: string;
  password: string;
}

export class SignUpModel extends LogInModel {
  code: string;
}
