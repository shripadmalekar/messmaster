import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { CategoryService } from '../../category/category.service';
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
    categoryid:number
    catagories=[]




  constructor(
    private categoryservice :  CategoryService,
    private foodService: FoodService) {
      this.categoryservice
      .getCategory().subscribe( response => {
          

          if(response['status']=='success'){
              this.catagories = response['data']
              this.categoryid= this.catagories[0].id
          }else{
              console.log(response['error'])
          }

      })


    
  }



  onSave() {
    this.foodService
      .add(this.foodname,this.foodprice,this.categoryid)
      .subscribe(response => {
        console.log(response['status'])
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