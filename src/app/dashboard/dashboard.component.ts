import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookService } from '../service/book.service';
import { ImageService } from '../service/image.service';
import { AppConfig } from '../config/apiConfig';

@Component({
  selector: 'app-home',
  templateUrl: 'dashboard.component.html',
  providers: [BookService, ImageService]
})
export class DashboardComponent {

  bookIsCollapsed : boolean = true;
  imageIsCollapsed : boolean = false;

  hotThreeBook = [];
  books = [];
  images = [];
  imgApi = AppConfig.IMGAPI;
  staticImg = AppConfig.static;

  constructor( 
    private bookService: BookService,
    private imageService: ImageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRankBooks();
    this.getHotImages();
  }

  getRankBooks() {
    this.bookService.getRankBooks('54d42d92321052167dfb75e3').subscribe(res => {
      // console.log(res);
      if(res != null && res.ok) {
        this.hotThreeBook = res.ranking.books.slice(0, 3);
        this.books = res.ranking.books.slice(3, 100);
      }
    });
  }

  getHotImages() {
    this.imageService.getHotImages().subscribe(res => {
      // console.log(res);
      if(res != null) {
        this.images = res;
      }
    });
  }

  viewTheImage(id){
    this.router.navigate(['/images/image-view', {id: id}]);
  }

  viewBookInfo(id) {
    this.router.navigate(['/books/book-info', {id: id}]);
  }

  changeCollapse(name) {
    if(name == 'book') {
      this.bookIsCollapsed = !this.bookIsCollapsed; 
    }
    if(name == 'image') {
      this.imageIsCollapsed = !this.imageIsCollapsed; 
    }
  }
  
}
