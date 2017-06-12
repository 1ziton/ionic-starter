import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';


import { HomePageModule } from '../pages/pages';
import { LoginPage } from '../pages/security/login/login';
import { SignupPage } from '../pages/security/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';

import { Settings } from '../providers/settings';

import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {User} from "../providers/user";
import {Api} from "../providers/api";

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
/*export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}*/

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomePageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    WelcomePage
  ],
  providers: [
    User,
    Api,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
