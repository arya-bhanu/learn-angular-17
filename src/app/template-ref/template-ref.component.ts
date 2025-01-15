import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  standalone: true,
  imports: [],
  templateUrl: './template-ref.component.html',
  styleUrl: './template-ref.component.css',
})
export class TemplateRefComponent {
  @Output()
  submitForm = new EventEmitter<{
    name: string;
    className: string;
    year: number;
  }>();

  handleSubmitForm(name: string, className: string, year: string) {
    this.submitForm.emit({ name, className, year: Number(year) });
  }
}
