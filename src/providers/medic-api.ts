import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class MedicApi {
  data: any;

  constructor(public http: Http) { }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/code4saApi.json')
        .map(this.processData);
    }
  }

  processData(data) {
    this.data = data.json();
    // We will skip the first element
    this.data = this.data.splice(1, this.data.length);
    return this.data;
  }


  getNames(queryText = '') {
    return this.load().map(data => {
      let newData: any = [];
      let names = data;
      // day.shownSessions = 0;
      if (queryText) {
        queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
        let queryWords = queryText.split(' ').filter(w => !!w.trim().length);

        names.forEach(name => {
          if (name.name.toLowerCase().indexOf(queryWords) > -1) {
            newData.push(name);
          }
        });
        // newData =  data.splice(0, 160);

        return newData;

      } else {
        // newData =  data.splice(0, 160);
        return data;
      }
    });
  }

}
