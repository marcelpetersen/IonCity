import {Injectable} from "@angular/core";
import {FOODS} from "./mock-foods";

@Injectable()
export class FoodService {
  private foods:any;

  constructor() {
    this.foods = FOODS;
  }

  getAll() {
    return this.foods;
  }

  getItem(id) {
    for (var i = 0; i < this.foods.length; i++) {
      if (this.foods[i].id === parseInt(id)) {
        return this.foods[i];
      }
    }
    return null;
  }

  remove(item) {
    this.foods.splice(this.foods.indexOf(item), 1);
  }
}