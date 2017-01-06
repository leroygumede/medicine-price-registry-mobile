import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { SettingsPage } from '../pages/settings/settings';

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
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    SettingsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, MedicApi, DosageImage, NameFilter]
})
export class AppModule { }
