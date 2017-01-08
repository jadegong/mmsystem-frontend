import {Injectable} from "@angular/core";
import {User} from "../models/user";

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
