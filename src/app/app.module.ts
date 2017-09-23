import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import services
import {FoodCategoryService} from '../services/food-category-service';
import {FoodService} from '../services/food-service';
import {GatewayService} from '../services/gateway-service';
import {HotelService} from '../services/hotel-service';
import {RestaurantService} from '../services/restaurant-service';
import {ActivityService} from '../services/activity-service';
import {AttractionService} from '../services/attraction-service';
import {ContactService} from '../services/contact-service';
// end import services

// import pages
import {ActivityPage} from '../pages/activity/activity';
import {AttractionDetailPage} from '../pages/attraction-detail/attraction-detail';
import {AttractionsPage} from '../pages/attractions/attractions';
import {FindFriendPage} from '../pages/find-friend/find-friend';
import {HomePage} from '../pages/home/home';
import {HotelDetailPage} from '../pages/hotel-detail/hotel-detail';
import {HotelsPage} from '../pages/hotels/hotels';
import {LoginPage} from '../pages/login/login';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {ModalFilterPage} from '../pages/modal-filter/modal-filter';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {RegisterPage} from '../pages/register/register';
import {RestaurantDetailPage} from '../pages/restaurant-detail/restaurant-detail';
import {RestaurantsPage} from '../pages/restaurants/restaurants';
import {SearchPage} from '../pages/search/search';
import {SettingPage} from '../pages/setting/setting';
import {WelcomePage} from '../pages/welcome/welcome';
// end import pages

@NgModule({
  declarations: [
    MyApp,
    ActivityPage,
    AttractionDetailPage,
    AttractionsPage,
    FindFriendPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    LoginPage,
    MainTabsPage,
    ModalFilterPage,
    MyProfilePage,
    RegisterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
    SettingPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivityPage,
    AttractionDetailPage,
    AttractionsPage,
    FindFriendPage,
    HomePage,
    HotelDetailPage,
    HotelsPage,
    LoginPage,
    MainTabsPage,
    ModalFilterPage,
    MyProfilePage,
    RegisterPage,
    RestaurantDetailPage,
    RestaurantsPage,
    SearchPage,
    SettingPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FoodCategoryService,
    FoodService,
    GatewayService,
    HotelService,
    RestaurantService,

    ActivityService,
    AttractionService,
    ContactService
    /* import services */
  ]
})
export class AppModule {
}
