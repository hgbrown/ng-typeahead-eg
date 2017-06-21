import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypeaheadAsyncComponent } from './demo-typeahead-async.component';

describe('DemoTypeaheadAsyncComponent', () => {
  let component: DemoTypeaheadAsyncComponent;
  let fixture: ComponentFixture<DemoTypeaheadAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypeaheadAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypeaheadAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
