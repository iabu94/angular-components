import { Component, Inject, signal, WritableSignal } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dialog-content',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle, MatButton, MatDialogClose],
  templateUrl: './dialog-content.component.html',
  styleUrl: './dialog-content.component.scss',
})
export class DialogContentComponent {
  count$ = new Subject<number>();

  count = signal<number>(0);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { count: WritableSignal<number> }
  ) {}

  trigger() {
    console.log('Dialog content triggered');
    this.count$.next(1);
  }
}
