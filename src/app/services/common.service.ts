import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  loading: Subject<boolean> = new Subject<boolean>();

  message = new Subject<string>();

  constructor() {

  }
}
