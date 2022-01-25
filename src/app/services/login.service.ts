import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRequest } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  /* login(user: UserRequest): Observable<Token | any> {
    return this.http
      .post<Token>(`${environment.REGRES_API}/login`, user)
      .pipe(
        map((resp) => resp),
        catchError(({error}) => {
          return of({
            error: error.error
          });
        })
      );
  } */

  login(user: UserRequest): Observable<Token | any> {
    return this.http.post<Token>(`${environment.REGRES_API}/login`, user);
  }
}
