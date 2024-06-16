import { Component, Input } from "@angular/core";
import { HousingLocation } from "../login/housing-location";

@Component({
  selector:"housing-location",
  standalone: true,
  templateUrl: "./housin-location.component.html"
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
