import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { BookService } from '../../service/book.service';
import { AppConfig } from '../../config/apiConfig';
import { Categories } from '../../config/categories';

@Component({
  selector: 'app-book-class',
  templateUrl: './book-class.component.html',
  styleUrls: ['./book-class.component.css'],
  providers: [BookService]
})
export class BookClassComponent implements OnInit {

  majorCate = "玄幻";
  minorCate = "";
  allCategories = null;
  books = [];
  imgApi = AppConfig.IMGAPI;
  staticImg = AppConfig.static;
  totalNumber = 0;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let majorCate = this.route.params['value']['majorCate'];
    if (majorCate!=null && majorCate!='') {
      this.majorCate = majorCate;
    }
    let minorCate = this.route.params['value']['minorCate'];
    if (minorCate!=null && minorCate!='') {
      this.minorCate = minorCate;
    }  
    this.allCategories = Categories; 
    this.getBooksByClass(this.majorCate, this.minorCate);
  }

  getBooksByClass(majorCate, minorCate) {
    this.bookService.getBooksByClass(majorCate, minorCate).subscribe(res => {
      console.log(res);
      if(res != null && res.ok) {
        this.books = res.books;
        this.totalNumber = res.total;
      }
    });
  }

  viewBookInfo(id) {
    this.router.navigate(['/books/book-info', {id: id}]);
  }

  mouseenter(e) {
    console.log(e)
  }

  mouseleave(e) {

    console.log(e)
  }
}
