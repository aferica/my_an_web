import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { BookService } from '../../service/book.service';
import { AppConfig } from '../../config/apiConfig';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css'],
  providers: [BookService]
})
export class BookInfoComponent implements OnInit {

  bookId = null;
  bookInfo = null;
  imgApi = AppConfig.IMGAPI;
  staticImg = AppConfig.static;
  max = 5;
  rate = 7;
  isReadonly = false;
  relatedBooks = null;
  allChapters = [];
  chapterRow = 0;
  chaptersCount = 0;
  updateTime = '';
  comments = null;
 
  overStar: number;
  percent: number;
 
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.params['value']['id'];
    this.bookId = id;
    this.getBookInfo(id);
    this.getRelatedRecommendedBooks(id);
    this.getBookAllChapters(id);
    this.getBookComments(id);
  }

  getBookInfo(id) {
    this.bookService.getBookInfo(id).subscribe(res => {
      console.log(res);
      if(res != null ) {
        this.bookInfo = res;
        this.chapterRow = Math.ceil( res.chaptersCount / 3 );
        this.chaptersCount = res.chaptersCount;
        this.updateTime = (new Date(res.updated)).toLocaleDateString();  console.log(this.updateTime);
      }
    });
  }

  getRelatedRecommendedBooks(id) {
    this.bookService.getRelatedRecommendedBooks(id).subscribe(res => {
      console.log(res);
      if(res != null ) {
        this.relatedBooks = res.books;
      }
    });
  }

  getBookAllChapters(id) {
    this.bookService.getBookAllChapters(id).subscribe(res => {
      console.log(res);
      if(res != null ) {
        this.allChapters = res.mixToc.chapters;
      }
    });
  }

  getBookComments(id) {
    this.bookService.getBookComments(id).subscribe(res => {
      console.log(res);
      if(res != null ) {
        this.comments = res.reviews.splice(0,50);
      }
    });
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }
 
  resetStar(): void {
    this.overStar = void 0;
  }

  viewBookInfo(id) {
    this.bookId = id;
    this.getBookInfo(id);
    this.getRelatedRecommendedBooks(id);
    this.getBookAllChapters(id);
    this.getBookComments(id);
  }

  readBook(number) {
    this.router.navigate(['/books/book-read', {bookId: this.bookId, chapterNumber: number}]);
  }
}
