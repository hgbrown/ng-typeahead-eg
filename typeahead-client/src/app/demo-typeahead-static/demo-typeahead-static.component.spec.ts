import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypeaheadStaticComponent } from './demo-typeahead-static.component';

describe('DemoTypeaheadStaticComponent', () => {
  let component: DemoTypeaheadStaticComponent;
  let fixture: ComponentFixture<DemoTypeaheadStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypeaheadStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypeaheadStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
