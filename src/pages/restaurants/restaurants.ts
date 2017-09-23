import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {RestaurantService} from "../../services/restaurant-service";
import {RestaurantDetailPage} from "../restaurant-detail/restaurant-detail";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html'
})
export class RestaurantsPage {
  // list of restaurants
  public restaurants;

  constructor(public nav: NavController, public restaurantService: RestaurantService) {
    this.restaurants = restaurantService.getAll();
  }

  // view restaurant detail
  viewRestaurant(id) {
    this.nav.push(RestaurantDetailPage, {id: id})
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }
}
