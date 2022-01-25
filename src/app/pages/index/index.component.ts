import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private commonService: CommonService, private router: Router) {
    this.commonService.loading.next(false);
   }

  ngOnInit(): void {
  }

  goUsers(){
    this.router.navigateByUrl('/table');
  }

}
