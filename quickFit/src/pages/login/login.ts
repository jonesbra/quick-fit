import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
    private toastCtrl: ToastController,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

  login() {
  		let data = this.loginForm.value;

  		if (!data.email) {
  			return;
  		}

  		let credentials = {
  			email: data.email,
  			password: data.password
  		};
  		this.auth.signInWithEmail(credentials)
			.then(
				() => {
          this.navCtrl.setRoot(HomePage);
          // Notify the user that the sign in was succesful
          let toast = this.toastCtrl.create({
            message: 'Signed in succesfully.',
            duration: 3000,
            position: 'bottom'
          });

          toast.present();
        },
				error => this.loginError = error.message
			);
  	}

    signup(){
      this.navCtrl.push(SignupPage);
    }
}
