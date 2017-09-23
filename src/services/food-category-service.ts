import {Injectable} from "@angular/core";
import {FOOD_CATEGORIES} from "./mock-food-categories";

@Injectable()
export class FoodCategoryService {
  private foodCategories:any;

  constructor() {
    this.foodCategories = FOOD_CATEGORIES;
  }

  getAll() {
    return this.foodCategories;
  }

  getItem(id) {
    for (var i = 0; i < this.foodCategories.length; i++) {
      if (this.foodCategories[i].id === parseInt(id)) {
        return this.foodCategories[i];
      }
    }
    return null;
  }

  remove(item) {
    this.foodCategories.splice(this.foodCategories.indexOf(item), 1);
  }
}