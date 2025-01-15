import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-child',
  standalone: true,
  imports: [],
  templateUrl: './shared-child.component.html',
  styleUrl: './shared-child.component.css',
})
export class SharedChildComponent {
  @Input({ required: true })
  sharedValue = 0;

  @Input({ required: true })
  greetingsFromInterceptSetter = '';
}
