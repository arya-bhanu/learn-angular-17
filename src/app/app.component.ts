import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DestroyComponent } from './destroy/destroy.component';
import { CommonModule } from '@angular/common';
import { ControlChildComponent } from './control-child/control-child.component';
import { SharedChildComponent } from './shared-child/shared-child.component';
import { InterceptSetterComponent } from './intercept-setter/intercept-setter.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LifecycleComponent,
    DestroyComponent,
    CommonModule,
    ControlChildComponent,
    SharedChildComponent,
    InterceptSetterComponent,
    ContentProjectionComponent,
    DynamicComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewChecked, AfterViewChecked {
  private _controlChild!: ControlChildComponent;
  @ViewChild(ControlChildComponent)
  get controlChild() {
    return this._controlChild;
  }
  set controlChild(child: ControlChildComponent) {
    this._controlChild = child;
  }

  isVisible = true;
  greetings = 'hello';
  title = 'learn-angular-17';
  minor = 1;
  major = 2;
  voters = ['Arya', 'Putu', 'Bhanuartha'];
  totalVote = 0;
  sharedValue = 0;

  constructor(readonly cd: ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    console.log('view checked');
    this.sharedValue = this._controlChild.number;
    this.cd.detectChanges();
  }

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  handleAddVote(count: number) {
    this.totalVote = count;
  }

  destroyElement() {
    this.isVisible = false;
  }

  increaseControl() {
    this.controlChild.increase();
  }

  decreaseControl() {
    this.controlChild.decrease();
  }
}
