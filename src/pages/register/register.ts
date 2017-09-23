import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {MainTabsPage} from "../main-tabs/main-tabs";


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public nav: NavController) {
  }

  // sign up
  signUp() {
    // add your sign up code here
    // redirect to home page
    this.nav.setRoot(MainTabsPage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
