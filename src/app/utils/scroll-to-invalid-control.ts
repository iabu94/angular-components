import { ElementRef } from '@angular/core';

export const scrollToInvalidControl = (controls: readonly ElementRef[]) => {
  const control = controls.find(s =>
    s.nativeElement.classList.contains('ng-invalid')
  );
  control?.nativeElement.scrollIntoView({
    behavior: 'smooth',
  });
  setTimeout(() => {
    control?.nativeElement.focus();
  }, 1000);
};
