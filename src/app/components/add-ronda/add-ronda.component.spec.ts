import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRondaComponent } from './add-ronda.component';

describe('AddRondaComponent', () => {
  let component: AddRondaComponent;
  let fixture: ComponentFixture<AddRondaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRondaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
