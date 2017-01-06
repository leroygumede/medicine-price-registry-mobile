import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class DosageImage {
  data: any;

  constructor(public http: Http) { }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/dataImage.json')
        .map(this.processData);
    }
  }

  processData(data) {
    this.data = data.json();
    return this.data;
  }


  getImage(requestedImage = '') {
    return this.load().map(data => {
      let newImage: string = "";

      data.forEach((image) => {

        if (image.name === requestedImage) {
          newImage = image;
        }
      });
      return newImage;

    });
  }

}
