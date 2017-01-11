import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

// Providers
import { MedicApi } from '../../providers/medic-api'

//Pages
import { DetailsPage } from '../details/details';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];
  medItems = [];
  icounter: number = 0;
  queryText = '';
  maxNames: number = 9;

  constructor(public navCtrl: NavController, public medicapi: MedicApi, public app: App) {

  }

  ionViewDidLoad() {
    this.app.setTitle('Medicine Price Registry');
    this.updateList();
  }

  updateList() {
    this.medicapi.getNames(this.queryText).subscribe(data => {
      this.items = [];
      let counter: number = 0;
      this.medItems = data;
      if (this.maxNames > data.length) {
        counter = data.length;
      } else {
        counter = this.maxNames
      }

      for (let i = 0; i < counter; i++) {
        this.items.push(data[i]);
      }
      this.icounter = this.maxNames;
    });
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    if (this.medItems.length ! > this.icounter) {
      setTimeout(() => {
        for (let i = this.icounter; i < this.icounter + this.maxNames; i++) {
          if (this.medItems[i]) {
            this.items.push(this.medItems[i]);
          }

        }
        this.icounter += this.maxNames;
        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 500);
    } else {
      infiniteScroll.complete();
    }

  }

  itemSelected(item) {
    this.navCtrl.push(DetailsPage, { 'item': item });
  }

  openSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }
}
