import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/customInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  get(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environment.POKE_API}`);
  }

  getById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.POKE_API}/${id}`);
  }

  editar(id: string, pokemon: Pokemon): Observable<Pokemon> {
    console.log(pokemon);
    return this.http.put<Pokemon>(`${environment.POKE_API}/${id}`, pokemon);
  }

  crear(pokemon: Pokemon): Observable<Pokemon> {
    console.log(pokemon);
    return this.http.post<Pokemon>(`${environment.POKE_API}`, pokemon);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.POKE_API}/${id}`);
  }

}
