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
import { RUTAS } from '../rutas/rutas';
import { CommonService } from '../services/common.service';
import { ValidarTokenService } from '../services/validar-token.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate, CanLoad {
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
      this.router.navigateByUrl(RUTAS[1].path);
      return false;
    }

    return true;
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    let jwt = this.tokenService.validarToken();

    if (jwt) {
      this.router.navigateByUrl(RUTAS[1].path);
      return false;
    }

    return true;
  }
}
