import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamenPage } from './samen.page';

describe('SamenPage', () => {
  let component: SamenPage;
  let fixture: ComponentFixture<SamenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
