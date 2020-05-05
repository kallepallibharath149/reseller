import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateNameComponent } from './animate-name.component';

describe('AnimateNameComponent', () => {
  let component: AnimateNameComponent;
  let fixture: ComponentFixture<AnimateNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
