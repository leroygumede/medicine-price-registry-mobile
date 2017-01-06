import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Providers
import { DosageImage } from '../../providers/dosage-image';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  item: any = [];
  imageHeader: string = 'load-bar';

  constructor(public navCtrl: NavController, public navParams: NavParams, public dosageImage: DosageImage) { }

  ionViewDidLoad() {

    this.item = this.navParams.get('item');
    this.dosageImage.getImage(this.item.dosage_form)
      .subscribe((asset) => {
        if (asset) {
          this.imageHeader = asset.image;
        }

      });
  }
}
