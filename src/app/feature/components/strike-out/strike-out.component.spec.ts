import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikeOutComponent } from './strike-out.component';

describe('StrikeOutComponent', () => {
  let component: StrikeOutComponent;
  let fixture: ComponentFixture<StrikeOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrikeOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrikeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
