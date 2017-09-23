import {Injectable} from "@angular/core";
import {CONTACTS} from "./mock-contacts";

@Injectable()
export class ContactService {
  private contacts:any;

  constructor() {
    this.contacts = CONTACTS;
  }

  getAll() {
    return this.contacts;
  }

  getItem(id) {
    for (var i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === parseInt(id)) {
        return this.contacts[i];
      }
    }
    return null;
  }

  remove(item) {
    this.contacts.splice(this.contacts.indexOf(item), 1);
  }
}