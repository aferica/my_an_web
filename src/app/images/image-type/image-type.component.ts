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
  tags = [];
  title = '';
  
  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let type = this.route.params['value']['type'];
    this.getPicturesByType(type);
  }

  getPicturesByType(type) {
    let tags = '';
    if(type == 'qingchun') {
      tags = '校花,青春,清纯,清新';
    }
    this.imageService.getImagesByTagOr(tags).subscribe (res=> {
      console.log(res);
      if(res != null) {
        this.images = res;
      }
    });
  }

  viewTheImage(id){
    this.router.navigate(['/images/image-view', {id: id}]);
  }
}
