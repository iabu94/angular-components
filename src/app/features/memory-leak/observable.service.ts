import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  private publisherSub = new Subject<number[]>();
  publisher$ = this.publisherSub.asObservable();

  constructor() {
    interval(200).subscribe(() => {
      const arr = [];
      for (let i = 0; i < 10000; i++) {
        arr.push(Math.random());
      }
      this.publisherSub.next(arr);
    });
  }
}
