import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { MatButton } from '@angular/material/button';
import { interval } from 'rxjs';

@Component({
  selector: 'app-dialog-parent',
  standalone: true,
  imports: [MatButton],
  templateUrl: './dialog-parent.component.html',
  styleUrl: './dialog-parent.component.scss',
})
export class DialogParentComponent {
  private dialog = inject(MatDialog);

  double = signal(0);

  constructor() {
    interval(2000).subscribe(index => {
      console.log(index);
      this.double.set(index);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      disableClose: true,
      data: { count: this.double },
    });
    dialogRef.componentInstance.count$.subscribe(value => {
      console.log('Dialog parent received:', value);
    });
  }
}
