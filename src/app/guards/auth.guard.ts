import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { RUTAS } from '../rutas/rutas';
import { ValidarTokenService } from '../services/validar-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private tokenService: ValidarTokenService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let jwt = this.tokenService.validarToken();

    if (jwt) {
      return true;
    }

    this.router.navigateByUrl(RUTAS[0].path);
    return false;
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    let jwt = this.tokenService.validarToken();

    if (jwt) {
      return true;
    }

    this.router.navigateByUrl(RUTAS[0].path);
    return false;
  }
}
