import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../config/apiConfig';

@Injectable()
export class ImageService {

  private API = AppConfig.API;
  private headers = new Headers({ 
    'Content-Type': 'application/json',
    'charset': 'UTF-8'});
  private options = new RequestOptions({ headers: this.headers });

  constructor( private http: Http) { }
  

  getHotImages(): Observable<any> {

    let params = new URLSearchParams;
    return this.http.get(AppConfig.photo.getPictureByTagsOr + '?tags=性感,推女神&limit=100' )
      .map(res => res.json());
  }

  getImageView(id): Observable<any> {
    return this.http.get(AppConfig.photo.getPictureById + '?_id=' + id).map(res => res.json());
  }

  getImagesByTagOr(tag,page): Observable<any> {
    return this.http.get(AppConfig.photo.getPictureByTagsOr + '?tags=' + tag + '&page=' + page).map(res => res.json());
  }

  getImageNumber(tag): Observable<any> {
    return this.http.get(AppConfig.photo.getPictureNumber + '?tags=' + tag).map(res => res.json());
  }

}