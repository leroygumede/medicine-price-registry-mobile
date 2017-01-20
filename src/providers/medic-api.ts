import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

// Native
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class MedicApi {
  data: any;
  connection_mode = 'IsOnline';
  hasSeenTutotial = 'hasSeenTutorial';

  constructor(
    public http: Http,
    public events: Events,
    public storage: Storage) { }

  load(): any {
    if (this.data) {
      return Observable.of(this.data);
    } else {
      return this.http.get('assets/data/code4saApi.json') //offline
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



  enableOfflineMode() {
    this.storage.set(this.connection_mode, false);
    this.events.publish('user:offline');
  }

  enableOnlineMode() {
    this.storage.set(this.connection_mode, true);
    this.events.publish('user:online');
  }

  getMode() {
    return this.storage.get('connection_mode').then((value) => {
      return value;
    });
  }
  setmode(status) {
    return this.storage.set('connection_mode', status).then((value) => {
      return value;
    });
  }

  checkHasSeenTutorial() {
    return this.storage.get(this.hasSeenTutotial).then((value) => {
      return value;
    })
  };

}
