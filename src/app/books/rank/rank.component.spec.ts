import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRankComponent } from './rank.component';

describe('RankComponent', () => {
  let component: BookRankComponent;
  let fixture: ComponentFixture<BookRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
