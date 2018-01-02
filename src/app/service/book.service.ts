import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../config/apiConfig';

@Injectable()
export class BookService {

  private API = AppConfig.API;
  private EncodeAPI = AppConfig.EncodeAPI;
  private headers = new Headers({ 
    'Content-Type': 'application/json',
    'charset': 'UTF-8'});
  private options = new RequestOptions({ headers: this.headers });

  constructor( private http: Http) { }
  

  getRankBooks(id): Observable<any> {
    return this.http.get(this.API  + AppConfig.rank.rankInfo + "/" + id)
      .map(res => res.json());
  }

  getAllRanks(): Observable<any> {
    return this.http.get(this.API  + AppConfig.rank.rankCategory )
      .map(res => res.json());
  }

  getBookInfo(id): Observable<any> {
    return this.http.get(this.API  + AppConfig.book.bookInfo + '/' + id )
      .map(res => res.json());
  }

  getRelatedRecommendedBooks(id): Observable<any> {
    console.log(this.API  + AppConfig.book.relatedRecommendedBooks + '/' + id + '/recommend');
    return this.http.get(this.API  + AppConfig.book.relatedRecommendedBooks + '/' + id + '/recommend')
      .map(res => res.json());
  }

  getBookAllChapters(id): Observable<any> {
    return this.http.get(this.API  + AppConfig.book.bookChapters + '/' + id )
      .map(res => res.json());
  }

  getBookComments(id): Observable<any> {
    return this.http.get(this.API  + AppConfig.comment.commentInfo + '?book=' + id + '&sort=comment-count&limit=50')
      .map(res => res.json());
  }
  
  getBookChapterInfo(link): Observable<any> {
    return this.http.get(this.EncodeAPI + AppConfig.book.chapterContent + '&encodeurl=' + encodeURIComponent(link))
      .map(res => res.json());
  }

}