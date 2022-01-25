import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidarTokenService {
  constructor() {}

  validarToken() {
    let jwt = localStorage.getItem('jwt');

    //TODO : validar contra un backend el token
    if (jwt) {
      return true;
    }
    return false;
  }
}
