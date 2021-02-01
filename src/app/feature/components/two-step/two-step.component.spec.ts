import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepComponent } from './two-step.component';

describe('TwoStepComponent', () => {
  let component: TwoStepComponent;
  let fixture: ComponentFixture<TwoStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
