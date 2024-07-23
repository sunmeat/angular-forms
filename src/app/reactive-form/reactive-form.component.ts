import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'; // npm install sweetalert2
// npm install --save-dev @types/sweetalert2

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get emailControl() {
    return this.form.get('email');
  }

  get passwordControl() {
    return this.form.get('password');
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      Swal.fire({
        title: 'Молодец!',
        html: `<strong>Почта:</strong> ${formData.email}<br><strong>Пароль:</strong> ${formData.password}`,
        icon: 'info',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Ошибка! :(',
        text: 'Реактивная форма заполнена неверно',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
}