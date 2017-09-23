import {Component} from "@angular/core";
import {App, NavController, Platform, ModalController} from "ionic-angular";
import {RestaurantService} from "../../services/restaurant-service";
import {HotelService} from "../../services/hotel-service";
import {AttractionService} from "../../services/attraction-service";
import {ModalFilterPage} from "../modal-filter/modal-filter";
import {RestaurantDetailPage} from "../restaurant-detail/restaurant-detail";
import {HotelDetailPage} from "../hotel-detail/hotel-detail";
import {AttractionDetailPage} from "../attraction-detail/attraction-detail";
declare var google: any;


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  // show filter by types
  public showTypes = true;
  // Map
  public map: any;
  // show full map
  public mapCenter: any;
  // map center
  public showFullMap = true;
  // filter by: 0 - restaurant, 1 - hotel, 2 - attraction
  public searchBy = 1;
  // list of items
  public items: any;
  // markers
  public markers = [];

  constructor(public app: App, public nav: NavController, public platform: Platform, public restaurantService: RestaurantService,
              public hotelService: HotelService, public attractionService: AttractionService,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    // init map
    this.initializeMap();
  }

  initializeMap() {
    let latLng = new google.maps.LatLng(21.0318202, 105.8495298);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }

    this.map = new google.maps.Map(document.getElementById("map-search"), mapOptions);
    let options = {timeout: 120000, enableHighAccuracy: true};

    // refresh map
    this.resizeMap();

    // use GPS to get center position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.mapCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.setCenter(this.mapCenter);
        new google.maps.Marker({
          map: this.map,
          position: this.map.getCenter(),
          icon: 'http://www.robotwoods.com/dev/misc/bluecircle.png'
        });
      },
      (error) => {
        console.log(error);
      },
      options
    );
  }

  // resize map
  resizeMap() {
    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
      this.map.setCenter(this.mapCenter);
    }, 300);

  }

  // show search form
  showForm() {
    this.showTypes = true;
    this.showFullMap = true;
    this.resizeMap();
  }

  // implement search
  search(searchBy) {
    this.showTypes = false;
    this.showFullMap = false;

    if (searchBy == 1) {
      this.items = this.restaurantService.getAll();
    } else if (searchBy == 2) {
      this.items = this.hotelService.getAll();
    } else {
      this.items = this.attractionService.getAll();
    }

    this.clearMarkers();
    this.setMarkers();
    this.resizeMap();
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // set map markers
  setMarkers() {
    for (let key in this.items) {
      let location = this.items[key].location;
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(location.lat, location.lon),
      });
      this.markers.push(marker);
    }
  }

  // clear markers
  clearMarkers() {
    for (let key in this.markers) {
      this.markers[key].setMap(null);
    }

    this.markers = [];
  }

  // show filter modal
  showFilter() {
    let modal = this.modalCtrl.create(ModalFilterPage);
    modal.present();
  }

  // view item detail
  viewItem(id) {

    // search by restaurant
    if (this.searchBy == 1) {
      this.app.getRootNav().push(RestaurantDetailPage, {id: id})
    } else if (this.searchBy == 2) { // search by hotel
      this.app.getRootNav().push(HotelDetailPage, {id: id})
    } else { // search by attraction
      this.app.getRootNav().push(AttractionDetailPage, {id: id})
    }
  }
}
