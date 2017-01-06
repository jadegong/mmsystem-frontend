import {Injectable} from "@angular/core";

@Injectable()
export class AuthenticationService {
  private _user: User = new User();

  constructor() {}

  public set fill(data: any) {
    this._user.name = data.name;
    this._user.role = data.role;
  }

  public get user(): User {
    return this._user;
  }
}

export class User {
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get role(): number {
    return this._role;
  }

  set role(value: number) {
    this._role = value;
  }
  private _name: string = null;
  private _role: number = null;

  constructor() {}
}
