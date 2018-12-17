import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import  { InterventionPage } from '../pages/intervention/intervention';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormLoginComponent } from '../components/form-login/form-login';
import { FormInterventionComponent } from '../components/form-intervention/form-intervention';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { FormInterventionPage } from '../pages/form-intervention/form-intervention';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    InterventionPage,
    FormLoginComponent,
    InterventionPage,
    FormInterventionPage,
    FormInterventionComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    InterventionPage,
    FormInterventionComponent,
    FormInterventionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}