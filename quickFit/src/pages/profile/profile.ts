import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController
  ) {

  }

  update() {
    console.log('updating profile information')

    // Notify the user that the update was succesful
    let toast = this.toastCtrl.create({
      message: 'Update was succesful.',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
