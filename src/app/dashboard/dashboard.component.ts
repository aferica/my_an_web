import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../service/book.service';
import { AppConfig } from '../config/apiConfig';

@Component({
  selector: 'app-home',
  templateUrl: 'dashboard.component.html',
  providers: [BookService]
})
export class DashboardComponent {

  hotThreeBook = [];
  books = [];
  imgApi = AppConfig.IMGAPI;
  staticImg = AppConfig.static;

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
        this.hotThreeBook = res.ranking.books.slice(0, 3);
        this.books = res.ranking.books.slice(3, 101);
      }
    });
  }
}
