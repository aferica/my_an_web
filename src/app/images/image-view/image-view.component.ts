import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ImageService } from '../../service/image.service';
import { AppConfig } from '../../config/apiConfig';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss'],
  providers: [ImageService]
})
export class ImageViewComponent implements OnInit {

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
    let id = this.route.params['value']['id'];
    this.getPictures(id);
  }

  getPictures(id) {
    this.imageService.getImageView(id).subscribe (res=> {
      // console.log(res);
      if(res != null && res.code == 0) {
        this.title = res.data[0].title;
        this.tags = res.data[0].tags;
        for(let url of res.data[0].image_url) {
          url = this.ImageUrl + url;
          this.images.push(url);
        } 
      }    
    });
  }

  findByTag(tag) {
    this.router.navigate(['/images/image-type', {tag: tag}]);
  }
}
