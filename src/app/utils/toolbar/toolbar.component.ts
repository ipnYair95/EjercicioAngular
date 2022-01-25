import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NavigationEnd, Router } from '@angular/router';
import { Ruta, RUTAS } from 'src/app/rutas/rutas';
import { of, Observable, map, withLatestFrom, filter } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ValidarTokenService } from 'src/app/services/validar-token.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  title = 'Bienvenido';
  rutas: Ruta[] = RUTAS;
  loading!: boolean;

  @ViewChild('sidenav')
  drawer!: MatSidenav;

  constructor(
    private commonService: CommonService,
    private tokenService: ValidarTokenService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    router.events
      .pipe(
        withLatestFrom(this.isHandset$),
        filter(([a, b]) => b && a instanceof NavigationEnd)
      )
      .subscribe((_) => this.drawer.close());

      this.commonService.loading.subscribe( resp => this.loading = resp );
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  ngOnInit(): void {}

  isLogged() {
    let jwt = this.tokenService.validarToken();
    return jwt ? true : false;
  }

  salir() {
    localStorage.removeItem('jwt');
    this.commonService.loading.next(true);
    setTimeout(() => {
      this.commonService.loading.next(false);
      this.router.navigateByUrl(this.rutas[0].path);
    }, 1000);
  }
}
