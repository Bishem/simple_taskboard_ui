import {Injectable} from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '@app/core/auth';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isAuthenticated.pipe(take(1), map(isAuth => !isAuth));
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isAuthenticated
      .pipe(take(1), map(isAuth => {

        console.log('is auth guard ', isAuth);

        if (isAuth) {
          this.router
            .navigate([''])
            .then(console.log)
            .catch(console.error);
        }
        return !isAuth;
      }));
  }
}
