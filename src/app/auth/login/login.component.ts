import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RUTAS } from 'src/app/rutas/rutas';
import { LoginService } from 'src/app/services/login.service';
import { CommonService } from '../../services/common.service';
import { Token, UserRequest } from '../../interfaces/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  forma!: FormGroup;

  showProgress = false;

  errorText = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private commonService: CommonService,
    private loginService: LoginService
  ) {
    this.forma = this.fb.group({
      email: [
        'eve.holt@reqres.in',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['cityslicka', [Validators.required]],
    });

    this.commonService.loading.next(false);
    this.commonService.loading.subscribe((resp) => (this.showProgress = resp));
  }

  isValido(campo: string) {
    return (
      this.forma.controls[campo].errors && this.forma.controls[campo].touched
    );
  }

  ngOnInit(): void {}

  activar() {
    if (this.forma.invalid || this.showProgress) {
      return true;
    }
    return false;
  }

  /* login() {
    this.showProgress = true;
    this.commonService.loading.next(true);

    //TODO: validacion contra backend de credenciales y retornara un jwt

    setTimeout(() => {
      localStorage.setItem('jwt','user')
      this.router.navigateByUrl( RUTAS[1].path );
    }, 2000);
  } */

  login() {
    this.errorText = '';

    this.commonService.loading.next(true);
    const req: UserRequest = this.forma.value;
    this.loginService.login(req).subscribe(
      (resp) => {
        this.commonService.loading.next(false);
        localStorage.setItem('jwt', JSON.stringify(resp));
        this.router.navigateByUrl(RUTAS[1].path);
      },
      ({ error }) => {
        this.commonService.message.next(error.error);
        this.commonService.loading.next(false);
      }
    );
  }
}
