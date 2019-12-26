import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/login/user.login.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
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



const routes:Route[]=[
  {path:'',component:adminlogin},
  {path:'food-list',component:FoodListComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-list',component:UserListComponent},
  {path:'food-add',component:FoodAddComponent},
  {path:'orders-list',component:OrdersListComponent},
  {path:'messorder-list',component:MessOrdersListComponent},
  {path:'userordered-list',component:UserOrderedListComponent},
  {path:'category-list',component:CategoryListComponent},
  {path:'create-menu',component:CreateMenuComponent}
  
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
    CreateMenuComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    FoodService,
    OrderService,
    CategoryService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }