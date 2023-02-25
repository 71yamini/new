import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Plant } from '../plant';
import { PlantoperationService } from '../plantoperation.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {
  plantId:string='';
  plantName:string='';
  height:String='';
  price:string='';
  imageName:string=''

  constructor(){
    this.plantId=localStorage.getItem("plantId")||'';
    this.plantName=localStorage.getItem("plantName")||'';
    this.height=localStorage.getItem("height")||'';
    this.price=localStorage.getItem("price")||'';
    this.imageName=localStorage.getItem("imageName")||'';
  }
  

  

}



