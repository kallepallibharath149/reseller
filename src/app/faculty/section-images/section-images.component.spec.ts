import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImagesComponent } from './section-images.component';

describe('SectionImagesComponent', () => {
  let component: SectionImagesComponent;
  let fixture: ComponentFixture<SectionImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
