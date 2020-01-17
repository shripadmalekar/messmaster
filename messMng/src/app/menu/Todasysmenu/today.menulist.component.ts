import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'todaymenu-list',
  templateUrl: './today.menulist.component.html',
  styleUrls: ['./today.menulist.component.css']
})
export class TodayMenuListComponent implements OnInit {

  menus: any[] = []
  menuid: number
  messid: number
  userid =1
  

  constructor(
    private router: Router,
    private menuservice:MenuService) {
      this.loadMenus()
  }
  onplaceorder(menuid:number,messid:number)
  {

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