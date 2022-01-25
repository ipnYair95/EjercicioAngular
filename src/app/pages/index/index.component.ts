import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { RUTAS, Ruta } from 'src/app/rutas/rutas';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  rutas: Ruta[] = RUTAS.slice(2);

  constructor(private commonService: CommonService, private router: Router) {
    this.commonService.loading.next(false);
   }

  ngOnInit(): void {
  }

  goUsers(){
    this.router.navigateByUrl('/table');
  }

}
