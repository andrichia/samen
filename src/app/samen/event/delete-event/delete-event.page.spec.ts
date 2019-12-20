import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEventPage } from './delete-event.page';

describe('DeleteEventPage', () => {
  let component: DeleteEventPage;
  let fixture: ComponentFixture<DeleteEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
