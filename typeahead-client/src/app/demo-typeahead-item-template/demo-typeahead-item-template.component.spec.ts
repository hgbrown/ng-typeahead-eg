import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypeaheadItemTemplateComponent } from './demo-typeahead-item-template.component';

describe('DemoTypeaheadItemTemplateComponent', () => {
  let component: DemoTypeaheadItemTemplateComponent;
  let fixture: ComponentFixture<DemoTypeaheadItemTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypeaheadItemTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypeaheadItemTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
