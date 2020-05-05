import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorsSectionComponent } from './interiors-section.component';

describe('InteriorsSectionComponent', () => {
  let component: InteriorsSectionComponent;
  let fixture: ComponentFixture<InteriorsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
