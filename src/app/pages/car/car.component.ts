import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from 'src/app/interfaces/interfaces';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  displayedColumns = [
    '#',
    'marca',
    'modelo',
    'anio',
    'actions'
  ];

  cars: Car[] = [];

  dataSource!: MatTableDataSource<Car>;

  sort!: MatSort;

  constructor(
    private userService: UserService,
    private commonService: CommonService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {

    this.commonService.loading.next(true);
    this.cars.push({
      marca: "FERRARI",
      modelo: "F-23",
      year: 2020
    });

    this.dataSource = new MatTableDataSource( [...this.cars] );
    this.commonService.loading.next(false);

  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {}

  verUser(id: number) {
    this.router.navigate(['/home/cars', id]);
  }
}
