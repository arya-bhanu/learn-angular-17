import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TestImageModule } from './test-image.module';

@Component({
  selector: 'app-test-image',
  standalone: false,
  templateUrl: './test-image.component.html',
  styleUrl: './test-image.component.css',
})
export class TestImageComponent {}
