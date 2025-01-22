import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestImageComponent } from './test-image.component';

const routes: Routes = [{ path: '', component: TestImageComponent }];
@NgModule({
  declarations: [TestImageComponent],
  imports: [CommonModule, NgOptimizedImage, RouterModule.forChild(routes)],
})
export class TestImageModule {}
