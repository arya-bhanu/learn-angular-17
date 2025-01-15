import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-input.component.html',
  styleUrl: './new-input.component.css',
})
export class NewInputComponent {
  @Input({ required: true })
  value!: number;
  @Output()
  valueChange = new EventEmitter();

  @Input({ required: true })
  twoWayVal!: number;
  @Output()
  twoWayValChange = new EventEmitter<number>();

  onValueChange() {
    this.valueChange.emit(this.value);
  }

  increase() {
    this.twoWayValChange.emit(++this.twoWayVal);
  }

  decrease() {
    this.twoWayValChange.emit(--this.twoWayVal);
  }
}
