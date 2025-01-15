import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-intercept-setter',
  standalone: true,
  imports: [],
  templateUrl: './intercept-setter.component.html',
  styleUrl: './intercept-setter.component.css',
})
export class InterceptSetterComponent {
  @Input({ required: true })
  get greetings() {
    return this._greetings;
  }
  set greetings(val: string) {
    this._greetings = `Setted with greet ${val}`;
  }
  private _greetings = '';

  @Output()
  greetingsChange = new EventEmitter<string>();

  changeValue() {
    this.greetingsChange.emit('Hello World');
  }
}
