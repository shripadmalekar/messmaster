import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'messorder-list',
  templateUrl: './messorder.list.component.html',
  styleUrls: ['./messorder.list.component.css']
})
export class MessOrdersListComponent implements OnInit {

  orders: any[] = []
  messid  = sessionStorage['messid']
   messid1  = sessionStorage["userid"]

  constructor(
    private router: Router,
    private orderService: OrderService) {
      this.loadOrders()
  }

  loadOrders() {
    console.log(this.messid1)
    this.orderService
      .messorder(this.messid)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.orders = response['data']
        }
      })
  }


  // onDelete(id: number) {
  //   this.orderService
  //     .deleteFood(id)
  //     .subscribe(response => {
  //       if (response['status'] == 'success') {
  //         this.loadOrders()
  //       } else {
  //         console.log(response['error'])
  //       }
  //     })
  // }

  ngOnInit() {
      }

}