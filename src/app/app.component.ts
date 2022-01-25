import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curso-axity';
  loading = false;

  constructor(
    private commonService: CommonService,
    private snackBar: MatSnackBar
  ) {
    this.commonService.loading.subscribe((resp) => {
      this.loading = resp;
    });

    this.commonService.message.subscribe((resp) => {
      this.snackBar.open(resp, 'Ok', { duration: 3000 });
    });
  }
}
