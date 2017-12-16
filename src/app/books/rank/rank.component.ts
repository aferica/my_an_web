import { Component, OnInit } from '@angular/core';

import { BookService } from '../../service/book.service';
import { AppConfig } from '../../config/apiConfig';
@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
  providers: [BookService]
})
export class BookRankComponent implements OnInit {

  females = [];
  males = [];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getAllRanks();
  }

  getAllRanks() {
    this.bookService.getAllRanks().subscribe(res => {
      console.log(res)
      if(res != null && res.ok) {
        for(let male of res.male) {
          this.bookService.getRankBooks(male._id).subscribe(books => {
            if(books != null && books.ok) {
              this.males.push({
                title: male.title,
                books: books.ranking.books.slice(0, 20),
                rankId: male._id,
                icon: AppConfig.IMGAPI + AppConfig.static + male.cover
              });
            }
          })
        }
        for(let female of res.female) {
          this.bookService.getRankBooks(female._id).subscribe(books => {
            if(books != null && books.ok) {
              this.females.push({
                title: female.title,
                books: books.ranking.books.slice(0, 20),
                rankId: female._id,
                icon: AppConfig.IMGAPI + AppConfig.static + female.cover
              });
            }
          })
        }
      }
    })
  }
}
