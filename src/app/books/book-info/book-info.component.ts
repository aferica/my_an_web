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

  bookInfo = null;
  imgApi = AppConfig.IMGAPI;
  staticImg = AppConfig.static;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.params['value']['id'];
    this.getBookInfo(id);
  }

  getBookInfo(id) {
    this.bookService.getBookInfo(id).subscribe(res => {
      console.log(res);
      if(res != null ) {
        this.bookInfo = res;
      }
    });
  }
}
