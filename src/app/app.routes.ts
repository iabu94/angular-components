import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'memory-leak',
    loadComponent: () =>
      import('./features/memory-leak/memory-leak.component').then(
        m => m.MemoryLeakComponent
      ),
  },
];
