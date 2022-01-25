import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { CarComponent } from './car/car.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'main',
        component: IndexComponent
      },
      {
        path: 'pokemons',
        component: PokemonComponent
      },
      {
        path: 'pokemons/detail',
        component: PokemonDetailComponent
      },
      {
        path: 'pokemons/detail/:id',
        component: PokemonDetailComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }  ,
      {
        path: 'users/:id',
        component: UserDetailComponent
      },
      {
        path: 'cars',
        component: CarComponent
      },
      {
        path: '**',
        redirectTo: 'main'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
