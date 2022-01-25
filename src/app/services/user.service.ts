import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ListUsers, UserResponse } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<ListUsers> {
    return this.http.get<ListUsers>(` ${environment.REGRES_API}/users`);
  }

  getUserById(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(` ${environment.REGRES_API}/users/${id}`);
  }


}
