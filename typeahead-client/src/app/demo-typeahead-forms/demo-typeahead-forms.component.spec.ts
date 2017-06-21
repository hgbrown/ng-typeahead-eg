import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypeaheadFormsComponent } from './demo-typeahead-forms.component';

describe('DemoTypeaheadFormsComponent', () => {
  let component: DemoTypeaheadFormsComponent;
  let fixture: ComponentFixture<DemoTypeaheadFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypeaheadFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypeaheadFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
