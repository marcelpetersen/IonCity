import {Injectable} from "@angular/core";
import {ATTRACTIONS} from "./mock-attractions";

@Injectable()
export class AttractionService {
  private attractions:any;

  constructor() {
    this.attractions = ATTRACTIONS;
  }

  getAll() {
    return this.attractions;
  }

  getItem(id) {
    for (var i = 0; i < this.attractions.length; i++) {
      if (this.attractions[i].id === parseInt(id)) {
        return this.attractions[i];
      }
    }
    return null;
  }

  remove(item) {
    this.attractions.splice(this.attractions.indexOf(item), 1);
  }
}