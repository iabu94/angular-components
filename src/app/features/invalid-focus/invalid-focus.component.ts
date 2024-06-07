import { Component, ElementRef, inject, viewChildren } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { scrollToInvalidControl } from '../../utils';

@Component({
  selector: 'app-invalid-focus',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatLabel, MatButton],
  templateUrl: './invalid-focus.component.html',
  styleUrl: './invalid-focus.component.scss',
})
export class InvalidFocusComponent {
  viewChildren = viewChildren(MatInput, { read: ElementRef });

  form = inject(FormBuilder).group({
    firstControl: ['', Validators.required],
    secondControl: ['', Validators.required],
  });

  readonly someElements = Array(100).map(s => s);

  submit() {
    if (this.form.invalid) {
      scrollToInvalidControl(this.viewChildren());
    }
  }
}
