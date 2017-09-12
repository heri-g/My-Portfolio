import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mock1Component } from './mock-1.component';

describe('Mock1Component', () => {
  let component: Mock1Component;
  let fixture: ComponentFixture<Mock1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mock1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
