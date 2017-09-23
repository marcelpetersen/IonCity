import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ContactService} from "../../services/contact-service";


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-find-friend',
  templateUrl: 'find-friend.html'
})
export class FindFriendPage {
  // contacts
  public contacts;

  constructor(public nav: NavController, public contactService: ContactService) {
    // set sample data
    this.contacts = contactService.getAll();
  }
}
