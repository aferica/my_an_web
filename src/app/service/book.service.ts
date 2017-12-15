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
  

  getRankBooks(): Observable<any> {

    let params = new URLSearchParams;
    return this.http.get(this.API + '?url=' + AppConfig.rank.rankInfo + "/54d42d92321052167dfb75e3")
      .map(res => res.json());
  }

  

}