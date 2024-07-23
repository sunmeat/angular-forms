import { Component } from '@angular/core';
import { InputFormComponent } from "./input-form/input-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ArrayFormComponent } from "./array-form/array-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputFormComponent, ReactiveFormComponent, ArrayFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-forms';
}