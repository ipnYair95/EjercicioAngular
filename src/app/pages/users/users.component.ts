import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../interfaces/interfaces';
import { CommonService } from '../../services/common.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { filter } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns = [
    '#',
    'email',
    'first_name',
    'last_name',
    'avatar',
    'actions',
  ];

  users: User[] = [];

  dataSource!: MatTableDataSource<User>;

  sort!: MatSort;

  constructor(
    private userService: UserService,
    private commonService: CommonService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.commonService.loading.next(true);

    this.userService.getUsers().subscribe((resp) => {
      this.users = resp.data;
      this.dataSource = new MatTableDataSource([...this.users]);
      this.commonService.loading.next(false);
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {}

  verUser(id: number) {
    this.router.navigate(['/home/users', id]);
  }
}
