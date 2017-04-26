import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Congratulations } from './congratulations';

@NgModule({
  declarations: [
    Congratulations,
  ],
  imports: [
    IonicPageModule.forChild(Congratulations),
  ],
  exports: [
    Congratulations
  ]
})
export class CongratulationsModule {}
