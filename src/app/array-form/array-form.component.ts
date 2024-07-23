import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'; // npm install sweetalert2
// npm install --save-dev @types/sweetalert2
import { ArrayFormModel } from '../form.model'; // отдельный класс-модели формы

@Component({
  selector: 'app-array-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})

export class ArrayFormComponent {
  formModel: ArrayFormModel;

  constructor(private fb: FormBuilder) {
    this.formModel = new ArrayFormModel(this.fb);
  }

  get emailControl() {
    return this.formModel.emailControl;
  }

  get passwordControl() {
    return this.formModel.passwordControl;
  }

  get termsControl() {
    return this.formModel.termsControl;
  }

  get hobbies() {
    return this.formModel.hobbies;
  }

  addHobby(): void {
    this.formModel.addHobby();
  }

  removeHobby(index: number): void {
    this.formModel.removeHobby(index);
  }

  onSubmit(): void {
    if (this.formModel.form.valid) {
      const formData = this.formModel.form.value;
      Swal.fire({
        title: 'Молодец!',
        html: `<strong>Почта:</strong> ${formData.email}<br><strong>Пароль:</strong> ${formData.password}<br><strong>Увлечения:</strong> ${formData.hobbies.map((hobby: { name: string }) => hobby.name).join(', ')}`,
        icon: 'info',
        confirmButtonText: 'OK'
      });
      this.formModel.form.reset(); // решение 4 задания
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