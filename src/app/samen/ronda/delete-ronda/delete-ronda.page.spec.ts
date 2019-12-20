import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRondaPage } from './delete-ronda.page';

describe('DeleteRondaPage', () => {
  let component: DeleteRondaPage;
  let fixture: ComponentFixture<DeleteRondaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRondaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRondaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
