import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {MainTabsPage} from "../main-tabs/main-tabs";


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController) {
  }

  // login
  login() {
    // add your login code here
    // redirect to home page
    this.nav.setRoot(MainTabsPage);
  }

  // go to signup page
  signUp() {
    this.nav.setRoot(RegisterPage);
  }
}
