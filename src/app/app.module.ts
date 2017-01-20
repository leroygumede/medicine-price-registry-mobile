import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

// Pages
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { SettingsPage } from '../pages/settings/settings';
import { TutorialPage } from '../pages/tutorial-page/tutorial-page'

// Providers
import { MedicApi } from '../providers/medic-api';
import { DosageImage } from '../providers/dosage-image';

// Pipes
import { NameFilter } from '../pipes/name-filter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    NameFilter,
    SettingsPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    SettingsPage,
    TutorialPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, MedicApi, DosageImage, NameFilter, Storage]
})
export class AppModule { }
