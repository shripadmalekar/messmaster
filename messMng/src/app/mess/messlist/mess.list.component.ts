import { Component, OnInit } from '@angular/core';
import { MessService } from '../mess.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mess-list',
  templateUrl: './mess.list.component.html',
  styleUrls: ['./mess.list.component.css']
})
export class MessListComponent implements OnInit {

  Mess: any[] = []

  constructor(
    private router: Router,
    private messservice: MessService) {
      this.loadmess()
  }

  loadmess() {
    this.messservice
      .getmess()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.Mess = response['data']
          console.log(this.Mess)
        }
      })
  }
  // onUpdateFood(foodname:string,categoryid:number,foodprice:number) {
  //   console.log(foodprice)
  //   sessionStorage['foodname']=foodname
  //   sessionStorage['categoryid']=categoryid
  //   sessionStorage['foodprice']=foodprice
  //   this.router.navigate(['/food-add'])
  // }
  // onAddFood()
  // {
  //   this.router.navigate(['/food-add'])
  // }


  // onDelete(id: number) {
  //   console.log('delete call',id)

  //   this.foodService
  //     .deleteFood(id)
  //     .subscribe(response => {
  //       if (response['status'] == 'success') {
          
  //         this.loadFood()

  //       } else {
  //         console.log(response['error'])
  //       }
  //     })
  // }

  ngOnInit() {
      }

}