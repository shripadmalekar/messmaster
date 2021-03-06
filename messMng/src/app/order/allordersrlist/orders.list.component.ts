import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'orders-list',
  templateUrl: './orders.list.component.html',
  styleUrls: ['./orders.list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: any[] = []

  constructor(
    private router: Router,
    private orderService: OrderService) {
      this.loadOrders()
  }

  loadOrders() {
    this.orderService
      .getorder()
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