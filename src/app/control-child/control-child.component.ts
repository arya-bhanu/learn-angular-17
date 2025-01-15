import { Component } from '@angular/core';

@Component({
  selector: 'app-control-child',
  standalone: true,
  imports: [],
  templateUrl: './control-child.component.html',
  styleUrl: './control-child.component.css',
})
export class ControlChildComponent {
  public number = 100;
  public increase() {
    this.number++;
  }
  public decrease() {
    if (this.number > 0) {
      this.number--;
    }
  }
}
