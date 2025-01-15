import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlChildComponent } from './control-child.component';

describe('ControlChildComponent', () => {
  let component: ControlChildComponent;
  let fixture: ComponentFixture<ControlChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
