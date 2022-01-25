import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/customInterface';
import { Notificaciones, Opcion } from 'src/app/interfaces/notificaciones';
import { PokemonService } from '../../services/pokemon.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements AfterViewInit {
  @ViewChild(MatSort)
  sort!: MatSort;

  displayedColumns: string[] = [
    '#',
    'nombre',
    'categoria',
    'habilidad',
    'avatar',
    'actions',
  ];
  dataSource!: MatTableDataSource<Pokemon>;
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private router: Router, private commonService: CommonService) {
    this.commonService.loading.next(true);
    this.pokemonService.get().subscribe((resp) => {
      this.pokemons = resp;
      this.dataSource = new MatTableDataSource([...this.pokemons]);
      this.dataSource.sort = this.sort;
      this.commonService.loading.next(false);
    });
  }

  ngAfterViewInit() {}

  pokeDetail(id: string) {
    console.log(id);
    this.router.navigate(['/home/pokemons/detail', id]);
  }

  async eliminar(id: string) {
    let flag = await Notificaciones.enviarNotificacion(
      Opcion.confirma,
      ` ¿Desea eliminar el pokemon? `
    );

    if (flag) {
      this.pokemonService.delete(id).subscribe(async (resp) => {
        this.pokemons = this.pokemons.filter((ele) => ele._id !== id);
        this.dataSource = new MatTableDataSource([...this.pokemons]);
        Notificaciones.enviarNotificacion( Opcion.exitoCustom, 'Pokemon eliminado con exito' );
      });
    }
  }
}
