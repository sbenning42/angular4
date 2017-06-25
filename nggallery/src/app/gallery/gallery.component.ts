import { Component, OnInit } from '@angular/core';
/*Import the Image model*/
import {Image} from '../models/image';

@Component({
  selector: 'ng-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  selectedImage: Image;
  
  constructor() { }

  ngOnInit() {
  }
  /*selectImage will be call by the event trigger on image-list component*/
  selectImage(image: Image) {
    this.selectedImage = image;
  }
}
