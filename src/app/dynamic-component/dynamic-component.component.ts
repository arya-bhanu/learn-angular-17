import { Component, inject } from '@angular/core';
import { DynamicComponentServiceTsService } from './dynamic-component.service.ts.service';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './dynamic-component.component.html',
  styleUrl: './dynamic-component.component.css',
})
export class DynamicComponentComponent {
  private ads = inject(DynamicComponentServiceTsService).getAds();
  private currIndex = 0;
  get currentAd() {
    return this.ads[this.currIndex];
  }

  displayNextAd() {
    if (this.currIndex == this.ads.length - 1) {
      this.currIndex = 0;
    } else {
      ++this.currIndex;
    }
    console.log(this.currIndex);
  }
}
