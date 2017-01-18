import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AppConstants} from "../../app.constants";
import '../../rxjs-operators';

@Injectable()
export class UserService {
  private userApi: string;

  constructor(
    private appConstants: AppConstants,
    public http: Http,
  ) {
    this.userApi = appConstants.apiUrl + '/user';
  }

  public register(regUserData) {
    return this.http.post(this.userApi + '/register', regUserData)
      .map(res => res.json());
  }
  public login(logUserData) {
    return this.http.post(this.userApi + '/login', logUserData)
      .map(res => res.json());
  }
  public logout() {}
}
