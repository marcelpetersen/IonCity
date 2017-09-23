import {Component} from "@angular/core";
import {NavController, MenuController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {MainTabsPage} from "../main-tabs/main-tabs";


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public nav: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }

  // go to home page
  goHome() {
    this.nav.setRoot(MainTabsPage);
  }

  // go to sign up page
  signUp() {
    this.nav.setRoot(RegisterPage);
  }
}
