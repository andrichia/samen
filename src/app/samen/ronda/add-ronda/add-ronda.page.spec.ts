import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRondaPage } from './add-ronda.page';

describe('AddRondaPage', () => {
  let component: AddRondaPage;
  let fixture: ComponentFixture<AddRondaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRondaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRondaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
