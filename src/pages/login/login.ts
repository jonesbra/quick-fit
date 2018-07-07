import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

import { ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
    private toastCtrl: ToastController,

    private auth: AuthService,
    private userService: UserService,

		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

  login() {
    let self = this

		let data = self.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		self.auth.signInWithEmail(credentials)
			.then(function () {
          self.navCtrl.setRoot(HomePage);
          // Notify the user that the sign in was succesful
          let toast = self.toastCtrl.create({
            message: 'Signed in succesfully.',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
      })
      .catch(function (error) {
        self.loginError = error.message;
      })
  	}

    signup(){
      this.navCtrl.push(SignupPage);
    }
}
