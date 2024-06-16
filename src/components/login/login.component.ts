import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housin-location.component";
import { HousingService } from "../housing-location/housing.service";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "./housing-location";

@Component({
  selector:"login",
  templateUrl: "./login.component.html",
  imports:[HousingLocationComponent, CommonModule],
  standalone: true,
  styleUrl: "./login.component.css"
})
export class LoginComponent {
  public housingLocationsList: HousingLocation[]
  housingService: HousingService = inject(HousingService)
  constructor(){
    this.housingLocationsList = this.housingService.getAllHousingLocations()
    console.log(this)
  }
}
