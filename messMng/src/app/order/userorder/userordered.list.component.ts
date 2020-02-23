import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'userordered-list',
  templateUrl: './userordered.list.component.html',
  styleUrls: ['./userordered.list.component.css']
})
export class UserOrderedListComponent implements OnInit {

  orders: any[] = []
  userid  = sessionStorage['userid']

  constructor(
    private router: Router,
    private orderService: OrderService) {
      this.loadOrders()
  }

  loadOrders() {
    this.orderService
      .userorder(this.userid)
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