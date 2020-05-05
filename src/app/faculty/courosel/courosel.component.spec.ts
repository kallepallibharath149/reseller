import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouroselComponent } from './courosel.component';

describe('CouroselComponent', () => {
  let component: CouroselComponent;
  let fixture: ComponentFixture<CouroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
