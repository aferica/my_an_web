import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../config/apiConfig';

@Injectable()
export class BookService {

  private API = AppConfig.API;
  private headers = new Headers({ 
    'Content-Type': 'application/json',
    'charset': 'UTF-8'});
  private options = new RequestOptions({ headers: this.headers });

  constructor( private http: Http) { }
  

  getRankBooks(id): Observable<any> {

    let params = new URLSearchParams;
    return this.http.get(this.API  + AppConfig.rank.rankInfo + "/" + id)
      .map(res => res.json());
  }

  getAllRanks(): Observable<any> {
    
    let params = new URLSearchParams;
    return this.http.get(this.API  + AppConfig.rank.rankCategory )
      .map(res => res.json());
  }

  getBookInfo(id): Observable<any> {
    
    let params = new URLSearchParams;
    return this.http.get(this.API  + AppConfig.book.bookInfo + '/' + id )
      .map(res => res.json());
  }

}