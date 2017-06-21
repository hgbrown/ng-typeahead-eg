import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypeaheadGroupingComponent } from './demo-typeahead-grouping.component';

describe('DemoTypeaheadGroupingComponent', () => {
  let component: DemoTypeaheadGroupingComponent;
  let fixture: ComponentFixture<DemoTypeaheadGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypeaheadGroupingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypeaheadGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
