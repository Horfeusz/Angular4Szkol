import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // const isLoggedIn = prompt('Are you logged in ?') === 'yes';
    // wyłączyłem bo mnie wkurza :-)
    // const isLoggedIn = route.data.roles.includes(prompt('Which ?'));
    const isLoggedIn = true;
    if (!isLoggedIn) {
      this.router.navigateByUrl('/');
    }
    return isLoggedIn;
  }

}
