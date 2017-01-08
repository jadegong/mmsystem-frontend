import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {Locker} from "angular2-locker";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private locker: Locker,
  ) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called!');
    let regexp = new RegExp('^\/modules(\/(\w+))*$', 'ig');
    let url: string = state.url;
    console.dir(route);
    console.dir(state);
    return this.checkAuth();
  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkAuth(): boolean {
    let token = this.locker.get('token');
    console.log(token);
    if (token) return true;

    this.router.navigate(['/login']);
    return false;
  }
}
