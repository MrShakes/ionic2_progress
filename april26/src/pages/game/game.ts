import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Hammer from "hammerjs";

/**
 * Generated class for the Game page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class Game {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Game');
  }

  ngOnInit() {
    this.handleTouch();
  }

  handleTouch() {
    var page = document.getElementById('registration');
    var mc = new Hammer(page);
    
    mc.on("swipeleft swiperight", function (event) {
      if (event.type === 'swiperight') {
        
      }

      if (event.type === 'swipeleft') {
      
    }

    }.bind(this));

  }

}
