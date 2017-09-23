import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {HotelService} from "../../services/hotel-service";
import {HotelDetailPage} from "../hotel-detail/hotel-detail";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {
  // list of hotels
  public hotels;

  constructor(public nav: NavController, public hotelService: HotelService) {
    this.hotels = hotelService.getAll();
  }

  // view hotel detail
  viewHotel(id) {
    this.nav.push(HotelDetailPage, {id: id})
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }
}
