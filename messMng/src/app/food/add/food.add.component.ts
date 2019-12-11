import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr'

@Component({
  selector: 'food-add',
  templateUrl: './food.add.component.html',
  styleUrls: ['./food.add.component.css']
})
export class FoodAddComponent implements OnInit {
    foodname:""
    foodprice:number
    Categoryid:number



  constructor(
    
    private foodService: FoodService) {
    
  }



  onSave() {
    this.foodService
      .add(this.foodname,this.foodprice,this.Categoryid)
      .subscribe(response => {
        if (response['status'] == 'success') {
            toastr.success(response['status'])
        } else {
          toastr.error(response['status'])
        }
      })
  }

  ngOnInit() {
      }

}