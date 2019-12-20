import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarisPage } from './inventaris.page';

describe('InventarisPage', () => {
  let component: InventarisPage;
  let fixture: ComponentFixture<InventarisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
