import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/login/user.login.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import{RouterModule,Route} from'@angular/router'
import { UserRegistrationComponent } from './user/registration/user.registration.component';
import { AdminDashboard } from './admin/admindashboard/admindashboard.component';
import { FoodService } from './food/food.service';
import { FoodListComponent } from './food/list/food.list.component';
import { adminlogin } from './admin/login/login.component';
import { UserListComponent } from './user/userlist/use.list.component';
import { FoodAddComponent } from './food/add/food.add.component';
import { OrderService } from './order/order.service';
import { OrdersListComponent } from './order/allordersrlist/orders.list.component';
import { MessOrdersListComponent } from './order/messorderlist/messorder.list.component';
import { UserOrderedListComponent } from './order/userorder/userordered.list.component';
import { CategoryService } from './category/category.service';
import { CategoryListComponent } from './category/list/category.list.component';
import { CreateMenuComponent } from './menu/createmenu/create.menu.component';
import { MenuService } from './menu/menu.service';
import { CategoryAddComponent } from './category/addcatagory/category.add.component';
import { TodayMenuListComponent } from './menu/Todasysmenu/today.menulist.component';
import { DatePipe } from '@angular/common';
import { MessListComponent } from './mess/messlist/mess.list.component';
import { MessService } from './mess/mess.service';
import { AdminRegistrationComponent } from './admin/registration/admin.registration.component';
import { AdminService } from './admin/admin.service';
// import { MapMenuComponent } from './menu/map/map.menu.component';



const routes:Route[]=[
  {path:'',component:AdminDashboard},
  {path:'user-login',component:UserLoginComponent},
  {path:'admin-login',component:adminlogin},
  {path:'food-list',component:FoodListComponent,canActivate: [AdminService]},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'admin-registration',component:AdminRegistrationComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-list',component:UserListComponent,canActivate: [AdminService]},
  {path:'food-add',component:FoodAddComponent,canActivate: [AdminService]},
  {path:'orders-list',component:OrdersListComponent,canActivate: [AdminService]},
  {path:'messorder-list',component:MessOrdersListComponent,canActivate: [AdminService]},
  {path:'userordered-list',component:UserOrderedListComponent,canActivate: [UserService]},
  {path:'category-list',component:CategoryListComponent,canActivate: [AdminService]},
  {path:'create-menu',component:CreateMenuComponent,canActivate: [AdminService]},
  {path:'app-addcategory',component:CategoryAddComponent,canActivate: [AdminService]},
  {path:'todaymenu-list',component:TodayMenuListComponent,},

  {path:'mess-list',component:MessListComponent,canActivate: [UserService]}
  // {path:'mess-map',component:MapMenuComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AdminDashboard,
    FoodListComponent,
    adminlogin,
    UserListComponent,
    FoodAddComponent,
    OrdersListComponent,
    MessOrdersListComponent,
    UserOrderedListComponent,
    CategoryListComponent,
    CreateMenuComponent,
    CategoryAddComponent,
    TodayMenuListComponent,
    MessListComponent,
    AdminRegistrationComponent,
    AdminDashboard
    // MapMenuComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    FoodService,
    OrderService,
    CategoryService,
    MenuService,
    DatePipe,
    MessService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }