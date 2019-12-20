import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaporComponent } from './add-lapor.component';

describe('AddLaporComponent', () => {
  let component: AddLaporComponent;
  let fixture: ComponentFixture<AddLaporComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLaporComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLaporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
