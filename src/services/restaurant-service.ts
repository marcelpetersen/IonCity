import {Injectable} from "@angular/core";
import {RESTAURANTS} from "./mock-restaurants";

@Injectable()
export class RestaurantService {
  private restaurants:any;

  constructor() {
    this.restaurants = RESTAURANTS;
  }

  getAll() {
    return this.restaurants;
  }

  getItem(id) {
    for (var i = 0; i < this.restaurants.length; i++) {
      if (this.restaurants[i].id === parseInt(id)) {
        return this.restaurants[i];
      }
    }
    return null;
  }

  remove(item) {
    this.restaurants.splice(this.restaurants.indexOf(item), 1);
  }
}