import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Pages
import { HomePage } from '../home/home';

// Providers
import { MedicApi } from '../../providers/medic-api';


@Component({
  selector: 'page-tutorial-page',
  templateUrl: 'tutorial-page.html'
})
export class TutorialPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public medicApi: MedicApi,
    public storage: Storage) { }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TutorialPage');
  }

  startApp() {
    this.navCtrl.push(HomePage).then(() => {
      this.storage.set('hasSeenTutotial', 'true');
    })
  }

}
