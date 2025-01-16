import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileModule } from './profile/profile.module';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [CommonModule, RouterOutlet, RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
