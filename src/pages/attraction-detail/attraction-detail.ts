import {Component} from "@angular/core";
import {NavController, Platform} from "ionic-angular";
import {AttractionService} from "../../services/attraction-service";


declare var google: any;
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-attraction-detail',
  templateUrl: 'attraction-detail.html'
})
export class AttractionDetailPage {
  // attraction info
  public attraction: any;
  // default rating
  public rating = 0;
  // Map
  public map: any;
  // rating values
  public ratingValues = [0, 0, 0, 0, 0];

  constructor(public nav: NavController, public attractionService: AttractionService, public platform: Platform) {
    // set sample data
    this.attraction = attractionService.getItem(1);

    // process reviews data
    for (let key in this.attraction.reviews) {
      this.ratingValues[this.attraction.reviews[key].rating - 1]++;
    }
  }


  ionViewDidLoad() {
    // init map
    this.initializeMap();
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // rate function
  rate(stars) {
    this.rating = stars;
  }

  initializeMap() {
    let latLng = new google.maps.LatLng(this.attraction.location.lat, this.attraction.location.lon);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    }

    this.map = new google.maps.Map(document.getElementById("map-detail"), mapOptions);
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    // refresh map
    setTimeout(() => {
      google.maps.event.trigger(this.map, 'resize');
    }, 300);
  }
}
