import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food.list.component.html',
  styleUrls: ['./food.list.component.css']
})
export class FoodListComponent implements OnInit {

  fooditems: any[] = []

  constructor(
    private router: Router,
    private foodService: FoodService) {
      this.loadFood()
  }

  loadFood() {
    this.foodService
      .getfood()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.fooditems = response['data']
          console.log(this.fooditems)
        }
      })
  }
  onUpdateFood(foodname:string,categoryid:number,foodprice:number) {
    console.log(foodprice)
    sessionStorage['foodname']=foodname
    sessionStorage['categoryid']=categoryid
    sessionStorage['foodprice']=foodprice
    this.router.navigate(['/food-add'])
  }
  onAddFood()
  {
    this.router.navigate(['/food-add'])
  }


  onDelete(id: number) {
    console.log('delete call',id)

    this.foodService
      .deleteFood(id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          
          this.loadFood()

        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() {
      }

}