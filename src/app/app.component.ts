import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingComponent, TemplateRefComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-angular-17';
  bindingVal = '';
  formObj = {
    name: '',
    className: '',
    year: 0,
  };
  changeVal(val: string) {
    this.bindingVal = val;
  }
  submitForm(out: { name: string; className: string; year: number }) {
    const { className, name, year } = out;
    this.formObj = { name, className, year };
  }
}
