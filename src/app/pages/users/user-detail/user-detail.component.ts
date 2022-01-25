import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CommonService } from '../../../services/common.service';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private commonService: CommonService,
    private router: Router
  ) {
    this.commonService.loading.next(true);
    this.route.params.subscribe((resp) => {
      const { id } = resp;

      this.userService.getUserById(id).subscribe(
        (resp) => {
          this.user = resp.data;
          this.commonService.loading.next(false);
        },
        (err) => {
          this.commonService.message.next('Usuario no encontrado');
          this.router.navigateByUrl('/home/users');
          this.commonService.loading.next(false);
        }
      );
    });
  }

  ngOnInit(): void {}
}
