import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { BookService } from '../../service/book.service';
import { AppConfig } from '../../config/apiConfig';
@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css'],
  providers: [BookService]
})
export class BookReadComponent implements OnInit {
  bookId = null;
  chapterNumber = 0;
  canNotLast = false;
  canNotNext = false;
  allChapters = [];
  title = null;
  content = null;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let bookId = this.route.params['value']['bookId'];
    let chapterNumber = this.route.params['value']['chapterNumber'];
    this.bookId = bookId;
    this.chapterNumber = chapterNumber;
    this.getBookAllChapters(bookId);
  }

  getBookAllChapters(id) {
    this.bookService.getBookAllChapters(id).subscribe(res => {
      console.log(res);
      if(res != null ) {
        this.allChapters = res.mixToc.chapters;
        this.getBookChapterInfo(this.allChapters[this.chapterNumber]);
        this.changeNextAndLastButtonState();
      }
    });
  }

  getBookChapterInfo(chapter) {
    this.title = chapter.title;
    this.bookService.getBookChapterInfo(chapter.link).subscribe(res => {
      console.log(res);
      if(res != null && res.ok) {
        this.content = '\u3000\u3000' + res.chapter.body.replace(/\n/g, '\r\n\u3000\u3000');       
      }
    });
  }

  getNextOrLastChapter(isNext) {
    if(isNext ) {
      this.chapterNumber = this.chapterNumber*1 + 1;
      this.changeNextAndLastButtonState();
      window.scrollTo(0, 0);
      // this.router.navigate(['/books/book-read', {bookId: this.bookId, chapterNumber: this.chapterNumber}]);
      this.getBookChapterInfo(this.allChapters[this.chapterNumber]);
    } 
    if(!isNext ) {
      this.chapterNumber = this.chapterNumber*1 - 1;
      this.changeNextAndLastButtonState();
      window.scrollTo(0, 0);
      this.getBookChapterInfo(this.allChapters[this.chapterNumber]);
      // this.router.navigate(['/books/book-read', {bookId: this.bookId, chapterNumber: this.chapterNumber}]);
    }
  }

  changeNextAndLastButtonState() {
    if(this.chapterNumber * 1 >= this.allChapters.length - 1) {
      this.canNotNext = true;
    }else if( this.chapterNumber * 1 < 1) {
      this.canNotLast = true;
    } else {
      this.canNotNext = false;
      this.canNotLast = false;
    }
  }

}
