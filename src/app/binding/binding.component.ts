import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent {
  @Input({ required: true })
  bindingVal!: string;
  @Output()
  setBindingVal = new EventEmitter<string>();

  changeVal(event: Event) {
    event.preventDefault();
    this.setBindingVal.emit((event.currentTarget as HTMLInputElement).value);
  }
}
