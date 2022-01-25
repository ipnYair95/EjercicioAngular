import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../../../interfaces/customInterface';
import { PokemonService } from '../../../services/pokemon.service';
import { CommonService } from '../../../services/common.service';
import { Notificaciones, Opcion } from '../../../interfaces/notificaciones';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  forma: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    habilidad: ['', [Validators.required]],
    avatar: ['', [Validators.required]],
  });

  pokemon: Pokemon = {
    _id: '',
    avatar: '',
    categoria: '',
    habilidad: '',
    nombre: '',
  };

  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private pokemonService: PokemonService,
    private commonService: CommonService
  ) {
    this.route.params.subscribe((resp) => {
      if (resp['id']) {
        this.pokemonService.getById(resp['id']).subscribe(
          (resp) => {
            this.id = resp['_id'];
            this.pokemon = resp;
            this.initForm();
          },
          () => {
            this.commonService.message.next('Pokemon no encontrado');
            this.router.navigateByUrl('/home/pokemons');
          }
        );
      } else {
        this.initForm();
      }
    });
  }

  initForm() {
    this.forma = this.fb.group({
      nombre: [this.pokemon.nombre, [Validators.required]],
      categoria: [this.pokemon.categoria, [Validators.required]],
      habilidad: [this.pokemon.habilidad, [Validators.required]],
      avatar: [this.pokemon.avatar, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  save() {
    this.pokemon = { ...this.forma.value };

    if (this.id != '') {
      this.pokemonService.editar(this.id, this.pokemon).subscribe(
        (resp) => {
          this.redirectSuccess();
        },
        () => {
          this.errorCustom();
        }
      );
      return;
    }

    this.pokemonService.crear(this.pokemon).subscribe(
      (resp) => {
        this.redirectSuccess();
      },
      () => {
        this.errorCustom();
      }
    );

  }

  getImg(){
    return this.forma.get('avatar')?.value;
  }

  redirectSuccess() {
    this.router.navigateByUrl('/home/pokemons');
    Notificaciones.enviarNotificacion(Opcion.exitoCustom);
  }

  errorCustom() {
    this.commonService.message.next('Ha ocurrido un error');
  }


}
