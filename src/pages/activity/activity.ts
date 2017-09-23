import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ActivityService} from "../../services/activity-service";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
  // activities
  public activities: any;

  constructor(public nav: NavController, public activityService: ActivityService) {
    // set sample data
    this.activities = activityService.getAll();
  }

  // make array with range is n
  range(n) {
    return new Array(Math.round(n));
  }

  // toggle like an activity
  toggleLike(activity) {
    activity.is_liked = !activity.is_liked;
  }
}
