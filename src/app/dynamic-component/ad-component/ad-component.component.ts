import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad-component',
  standalone: true,
  imports: [],
  templateUrl: './ad-component.component.html',
  styleUrl: './ad-component.component.css',
})
export class AdComponentComponent {
  @Input({ required: true })
  addName!: string;
  @Input({ required: true })
  addDate!: Date;
}
