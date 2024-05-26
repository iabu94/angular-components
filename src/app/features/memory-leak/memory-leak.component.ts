import { Component, signal } from '@angular/core';
import { MemoryLeakChildComponent } from './memory-leak-child/memory-leak-child.component';

@Component({
  selector: 'app-memory-leak',
  standalone: true,
  imports: [MemoryLeakChildComponent],
  templateUrl: './memory-leak.component.html',
  styleUrl: './memory-leak.component.scss',
})
export class MemoryLeakComponent {
  showChild = signal(false);

  resetValues() {
    this.showChild.set(!this.showChild());
  }
}
