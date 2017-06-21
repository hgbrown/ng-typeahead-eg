import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypeaheadFieldComponent } from './demo-typeahead-field.component';

describe('DemoTypeaheadFieldComponent', () => {
  let component: DemoTypeaheadFieldComponent;
  let fixture: ComponentFixture<DemoTypeaheadFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypeaheadFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypeaheadFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
