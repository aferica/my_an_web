import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: 'dashboard.component.html',
  providers: [BookService]
})
export class DashboardComponent {

  books = [];

  constructor( 
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getRankBooks();
  }

  getRankBooks() {
    this.bookService.getRankBooks().subscribe(res => {
      console.log(res);
      if(res != null && res.ok) {
        this.books = res.ranking.books;
      }
    });
  }
}
