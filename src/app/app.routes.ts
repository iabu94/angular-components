import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'memory-leak',
    loadComponent: () =>
      import('./features/memory-leak/memory-leak.component').then(
        m => m.MemoryLeakComponent
      ),
  },
  {
    path: 'dialog-to-parent',
    loadComponent: () =>
      import(
        './features/dialog-to-parent/dialog-parent/dialog-parent.component'
      ).then(m => m.DialogParentComponent),
  },
  {
    path: 'multi-select',
    loadComponent: () =>
      import('./features/multi-select/multi-select.component').then(
        c => c.MultiSelectComponent
      ),
  },
  {
    path: 'invalid-focus',
    loadComponent: () =>
      import('./features/invalid-focus/invalid-focus.component').then(
        c => c.InvalidFocusComponent
      ),
  },
];
