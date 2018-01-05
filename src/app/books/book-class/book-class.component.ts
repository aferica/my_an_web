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

  pageArray = [];
  pages: number = 0;
  currentPage: number = 1;
  numPages: number = 0;

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
    let currentPage = this.route.params['value']['minorCate'];
    if (minorCate!=null && minorCate!='') {
      this.minorCate = minorCate;
    } 
    this.allCategories = Categories; 
    this.getBooksByClass();
  }

  getBooksByClass() {
    this.bookService.getBooksByClass(this.majorCate, this.minorCate, this.currentPage).subscribe(res => {
      console.log(res);
      if(res != null && res.ok) {
        this.books = res.books;
        this.totalNumber = res.total;
        this.pages = Math.ceil(res.total / 20 ); console.log(this.pages)
        this.getPageArray(); 
        window.scrollTo(0, 0);
      }
    });
  }

  // 0代表...
  getPageArray() {
    if (this.pages < 8) {
      for(let i = 0; i < this.pages; i++) {
        this.pageArray.push(i + 1);
      }
    } else {
      if (this.currentPage < 5) {
        this.pageArray = [1,2,3,4,5,6,7,'...'];
      } else if (this.currentPage > this.pages - 4) {
        this.pageArray = ['...',this.pages-6,this.pages-5,this.pages-4,this.pages-3,this.pages-2,this.pages-1,this.pages];
      } else {
        this.pageArray = ['...',this.currentPage-3,this.currentPage-2,this.currentPage-1,this.currentPage,this.currentPage+1,this.currentPage+2,this.currentPage+3,'...'];
      }
    }
  }

  changePage(index) {
    this.currentPage = index;
    this.getBooksByClass();
  }
 
  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
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
