import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Intro } from '../pages/intro/intro';
import { Game } from '../pages/game/game';
import { Stage1 } from '../pages/stage-1/stage-1';
import { Photo } from '../pages/photo/photo';

@NgModule({
  declarations: [
    MyApp,
    Intro,
    Game,
    Stage1,
    Photo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Intro,
    Game,
    Stage1,
    Photo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
