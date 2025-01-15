import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedChildComponent } from './shared-child.component';

describe('SharedChildComponent', () => {
  let component: SharedChildComponent;
  let fixture: ComponentFixture<SharedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
