import { Component } from '@angular/core';
import { ObservableService } from '../observable.service';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-memory-leak-child',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './memory-leak-child.component.html',
  styleUrl: './memory-leak-child.component.scss',
})
export class MemoryLeakChildComponent {
  data: number[][] = [];

  constructor(private observableService: ObservableService) {
    this.observableService.publisher$
      .pipe(takeUntilDestroyed())
      .subscribe(element => {
        this.data.push(element);
      });
  }
}
