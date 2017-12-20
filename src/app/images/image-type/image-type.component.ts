import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ImageService } from '../../service/image.service';
import { AppConfig } from '../../config/apiConfig';

@Component({
  selector: 'app-image-type',
  templateUrl: './image-type.component.html',
  styleUrls: ['./image-type.component.scss'],
  providers: [ ImageService]
})
export class ImageTypeComponent implements OnInit {

  ImageUrl = AppConfig.IMGAPI;
  images = [];
  tags = '';
  page = '1';
  title = '';
  
  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tags = this.route.params['value']['tag'];
    let type = this.route.params['value']['type'];
    if(type == 'qingchun') {
      this.tags = '校花,青春,清纯,清新';
    }
    let page = this.route.params['value']['page'];
    this.getImages(type);
  }

  getImages(page) {  
    this.imageService.getImagesByTagOr(this.tags,page).subscribe (res=> {
      // console.log(res);
      if(res != null) {
        this.images = res;
      }
    });
  }

  viewTheImage(id){
    this.router.navigate(['/images/image-view', {id: id}]);
  }

  goToLastPage(){
    let temp = 1;
    if (this.page!='1')
      temp = parseInt(this.page) - 1
    //this.router.navigate(['/image/xinggan/' + temp]);
    this.page = temp.toString();
    this.getImages(temp);
  }

  goToNextPage(){
    let temp = parseInt(this.page) + 1
    //this.router.navigate(['/image/xianggan/' + temp]);
    this.page = temp.toString();
    this.getImages(temp);
  }
}
