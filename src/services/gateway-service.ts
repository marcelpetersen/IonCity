import {Injectable} from "@angular/core";
import {GATEWAYS} from "./mock-gateways";

@Injectable()
export class GatewayService {
  private gateways:any;

  constructor() {
    this.gateways = GATEWAYS;
  }

  getAll() {
    return this.gateways;
  }

  getItem(id) {
    for (var i = 0; i < this.gateways.length; i++) {
      if (this.gateways[i].id === parseInt(id)) {
        return this.gateways[i];
      }
    }
    return null;
  }

  remove(item) {
    this.gateways.splice(this.gateways.indexOf(item), 1);
  }
}