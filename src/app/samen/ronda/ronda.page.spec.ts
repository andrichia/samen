import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaPage } from './ronda.page';

describe('RondaPage', () => {
  let component: RondaPage;
  let fixture: ComponentFixture<RondaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RondaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RondaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
