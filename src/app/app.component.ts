import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

// Pages
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial-page/tutorial-page';

// PRoviders
import { MedicApi } from '../providers/medic-api';

//Mative plugins
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  constructor(
    private platform: Platform,
    public events: Events,
    public medicApi: MedicApi,
    public storage: Storage) {
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   StatusBar.styleDefault();
    //   Splashscreen.hide();
    // });

    //--------------------------------
    // Check if the user has already seen the tutorial
    this.storage.get('hasSeenTutotial')
      .then((hasSeenTutotial) => {
        if (hasSeenTutotial) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = TutorialPage;
        }
        this.platformReady()
      })

    // load the conference data
    medicApi.load();

    this.listenToLoginEvents();

  }

  openTutorial() {
    this.nav.setRoot(TutorialPage);
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      // this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      // this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      // this.enableMenu(false);
    });
  }

  //---
  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
