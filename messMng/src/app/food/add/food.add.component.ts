import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { CategoryService } from '../../category/category.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr'
import {FormBuilder,FormGroup} from '@angular/forms';

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
    foodform=FormGroup




  constructor(
    private categoryservice :  CategoryService,
    private foodService: FoodService,
    private fb:FormBuilder,
    private router :Router) {

this.foodname =sessionStorage['foodname']
this.foodprice =sessionStorage['foodprice']


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
  onCancel()
  {this.router.navigate(['/food-list'])

  }



  onSave() {
    this.foodService
      .add(this.foodname,this.foodprice,this.categoryid)
      .subscribe(response => {
        console.log(response['status'])
        if (response['status'] == 'success') {
            toastr.success(response['status'])
            this.router.navigate(['/food-list'])
        } else {
          toastr.error(response['status'])
        }
      })
  }

  ngOnInit() {
    // this.foodform= this.fb.group({
      
    //})
      }

}