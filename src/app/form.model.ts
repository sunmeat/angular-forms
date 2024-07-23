import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

export class ArrayFormModel {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
      hobbies: this.fb.array([])
    });
  }

  get emailControl() {
    return this.form.get('email');
  }

  get passwordControl() {
    return this.form.get('password');
  }

  get termsControl() {
    return this.form.get('terms');
  }

  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  addHobby(): void {
    this.hobbies.push(this.fb.group({
      name: ['']
    }));
  }

  removeHobby(index: number): void {
    this.hobbies.removeAt(index);
  }
}