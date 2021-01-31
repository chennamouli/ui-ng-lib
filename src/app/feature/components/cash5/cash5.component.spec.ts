import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cash5Component } from './cash5.component';

describe('Cash5Component', () => {
  let component: Cash5Component;
  let fixture: ComponentFixture<Cash5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cash5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cash5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
