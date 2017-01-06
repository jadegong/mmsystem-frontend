import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthenticationService,
    private router: Router
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
    if (this.auth.user.name) return true;

    this.router.navigate(['/login']);
    return false;
  }
}
