import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRondaPage } from './update-ronda.page';

describe('UpdateRondaPage', () => {
  let component: UpdateRondaPage;
  let fixture: ComponentFixture<UpdateRondaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRondaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRondaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
