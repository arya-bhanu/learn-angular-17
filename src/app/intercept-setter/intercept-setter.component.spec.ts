import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptSetterComponent } from './intercept-setter.component';

describe('InterceptSetterComponent', () => {
  let component: InterceptSetterComponent;
  let fixture: ComponentFixture<InterceptSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptSetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterceptSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
