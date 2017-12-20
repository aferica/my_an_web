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
      this.title = res[0].title;
      this.tags = res[0].tags;
      this.images = res[0].image_url;
    });
  }

  findByTag(tag) {
    this.router.navigate(['/images/image-type', {tag: tag}]);
  }
}
