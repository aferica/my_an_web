import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookClassComponent } from './book-class.component';

describe('BookClassComponent', () => {
  let component: BookClassComponent;
  let fixture: ComponentFixture<BookClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
