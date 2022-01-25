import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { MatCardModule } from '@angular/material/card';
import { CarComponent } from './car/car.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    IndexComponent,
    PokemonComponent,
    UsersComponent,
    UserDetailComponent,
    CarComponent,
    PokemonDetailComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
})
export class PagesModule {}
