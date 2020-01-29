import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminService implements CanActivate{

    url = 'http://localhost:5000/adminlogin'
    constructor(private http:HttpClient,
        private router:Router) { }

        login(email: string, messpassword: string) {
            console.log('email'+email)
            console.log('userpassword'+messpassword)
                    const body = {
                        email: email,
                      messpassword: messpassword
            }
        
                  return this.http.post(this.url + '/login', body)
          }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user is already logged in
    // if (sessionStorage['login_status'] == '1') {
    if (sessionStorage['login_status'] == 1) {
      return true
    }

    // if user is not logged yet, load the login page
    this.router.navigate(['/'])
    return false
  }
  
  //register
  registerUser(messname: string, email: string,messaddress :string,messowner :string, messcontact :string,messpassword: string ,longitude:string,latitude:string,role:string) {
    // console.log('messname '+messname)
    // console.log('email '+email)
    // console.log('pass '+messpassword)
    // console.log('add '+messaddress)
    // console.log('contact '+messcontact)
    // console.log('owner '+messowner)
    // console.log('lat '+latitude)
    // console.log('lon '+longitude)
    const body = {
                    messname: messname,
                    email: email,
                    messpassword: messpassword,
                    messaddress:messaddress,
                    messowner:messowner,
                    messcontact:messcontact,
                    longitude:longitude,
                    latitude:latitude,
                    role:role
                 }
                 console.log(body)

    return this.http.post(this.url + '/registration', body)
  }


}