import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrNothingComponent } from './all-or-nothing.component';

describe('AllOrNothingComponent', () => {
  let component: AllOrNothingComponent;
  let fixture: ComponentFixture<AllOrNothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOrNothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOrNothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
