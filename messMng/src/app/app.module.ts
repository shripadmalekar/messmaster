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
const routes:Route[]=[
  {path:'',component:adminlogin},
  {path:'food-list',component:FoodListComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-list',component:UserListComponent},
  {path:'food-add',component:FoodAddComponent}

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
    FoodAddComponent
 ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }