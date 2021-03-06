import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { OrderService } from '../../order/order.service';
import * as toastr from 'toastr'
@Component({
  selector: 'todaymenu-list',
  templateUrl: './today.menulist.component.html',
  styleUrls: ['./today.menulist.component.css']
})
export class TodayMenuListComponent implements OnInit {

  menus= []
  menuid: number
  messid: number
  userid =sessionStorage['userid']
  

  constructor(
    private router: Router,
    private menuservice:MenuService,
    private orderservice:OrderService) {
      this.loadMenus()
  }
  isadmin(){
    if(sessionStorage['role']=='admin'){
      return false
    }else{

      
      return true
    }
  }
  onplaceorder(menuid:number,messid:number)

  {
    console.log(messid +' hey'+menuid)
    this.orderservice
    .placeorder(menuid,messid,this.userid)
    .subscribe( response => {
      if(response['status']=='success'){
        console.log(sessionStorage['role'])
        if(sessionStorage['role']=="admin")
        {
          console.log("admin")
          this.router.navigate["/orders-list"]
        }else if(sessionStorage['role']=="owner")
        {
          console.log("owner")
          this.router.navigate["/messorder-list"]
        }else if(sessionStorage['role']=="user"){
          console.log("user")
          this.router.navigate["/userordered-list"]
        }
        toastr.success('order placed')

      }else{
          console.log(response['error'])
      }

  })

  }

  loadMenus() {
    console.log(this.menus)
    this.menuservice
      .todaymenus()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.menus = response['data']
          console.log(this.menus)
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