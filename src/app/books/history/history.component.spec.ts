import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHistoryComponent } from './history.component';

describe('HistoryComponent', () => {
  let component: BookHistoryComponent;
  let fixture: ComponentFixture<BookHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
