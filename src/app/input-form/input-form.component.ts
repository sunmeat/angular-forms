import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})

export class InputFormComponent {
  email: string = '';
  password: string = '';

  onSubmit(): void {
    const formData = {
      email: this.email,
      password: this.password
    };
    console.log(formData);
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
  }
}
