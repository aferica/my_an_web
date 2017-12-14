import { Injectable } from '@angular/core';
import { Jsonp, Headers, RequestOptions, Response, Http } from '@angular/http';

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

  constructor(private jsonp: Jsonp,
              private http: Http) { }
  

  getBooks(): Observable<any> {

    let params = new URLSearchParams;
    let url = 'http://api.zhuishushenqi.com/book/by-categories?major=%E9%83%BD%E5%B8%82';
    return this.http.get(this.API + '?url=' + url)
      .map(res => res.json());
  }

  

}