import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController,
    private auth: AuthService,
    private toastCtrl: ToastController
  ) {

  }

  signOut() {
    // Sign out using authorization service
    this.auth.signOut();

    // Notify the user that we have succesfully signed out
    let toast = this.toastCtrl.create({
      message: 'Signed out succesfully.',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
