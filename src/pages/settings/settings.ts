import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

// Providers
import { MedicApi } from '../../providers/medic-api'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  useInternetSetting: boolean = false;
  twitterConnection = {
    checked: true,
    text: 'Twitter'
  }
  routerState: boolean = false;
  statusState: boolean = false;
  reversePowerState: string = 'ON';
  routerStatus: string;
  routerPowerState: string = 'OFF';

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public medicapi: MedicApi) { }

  ionViewDidLoad() {
    this.getModeStatus();
  }

  routerOnOff() {
    if (this.routerState) {
      this.routerStatus = '1';
      this.routerPowerState = 'ON';
      this.reversePowerState = 'OFF';
    } else {
      this.routerStatus = '0';
      this.routerPowerState = 'OFF';
      this.reversePowerState = 'ON';
    }
    this.setMode(this.routerState);
  }

  setMode(state) {
    this.medicapi.setmode(state)
      .then((result) => {
        // console.log('Setting status: ' + result);
      },
      (err) => {
        //this._errorHelper.handleError(err);
      });
  }

  showConfirm(title, message, p1, buttons) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: buttons
    });
    confirm.present();

  }

  /**
   * Prompts user for validation on changing router power state
   */
  togglePrompt() {
    if (this.statusState) {
      let title = 'Turn Router ' + this.reversePowerState + '?';
      let buttons = [
        {
          handler: (data) => {
            this.statusState = false;
            this.routerState = !this.routerState;
          },
          role: 'cancel',
          text: 'Cancel'
        },
        {
          handler: () => this.routerOnOff(),
          text: 'Confirm'

        }
      ];
      this.showConfirm(title, 'Would You like to turn your router ' + this.reversePowerState + '? This could take up to 10 Mins to reflect ', null, buttons);
    }
    this.statusState = true;
  }


  getModeStatus() {
    this.medicapi.getMode()
      .then((result) => {
        if (result === false) {
          this.routerState = false;
          this.statusState = true;
          this.routerStatus = '1';
          this.routerPowerState = 'ON';
          this.reversePowerState = 'OFF';

        } else {
          this.routerState = true;
          this.statusState = false;
          this.routerStatus = '0';
          this.routerPowerState = 'OFF';
          this.reversePowerState = 'ON';
        }

      },
      (err) => {
        //this._errorHelper.handleError(err);
      });
  }



}



