import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UserService implements CanActivate {

  url = 'http://localhost:5000/personinfo'

  constructor(private http: HttpClient,
    private router: Router) { }
//login
  login(email: string, userpassword: string) {
    console.log('email'+email)
    console.log('userpassword'+userpassword)
            const body = {
              email: email,
              userpassword: userpassword
    }

          return this.http.post(this.url + '/login', body)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user is already logged in
    // if (sessionStorage['login_status'] == '1') {
    if (sessionStorage['login_status'] == '1') {
      return true
    }

    // if user is not logged yet, load the login page
    this.router.navigate(['/user-login'])
    return false
  }
  
  //register
  registerUser(name: string, email: string,address :string, password: string  ) {
    console.log('name'+name)
    console.log('email'+email)
    console.log('pass'+password)
    console.log('add'+address)
    
    const body = {
                     nusername: name,
                     email: email,
                     userpassword: password,
                     address:address,
                     role:"user"
                  }
 console.log(body)
    return this.http.post(this.url + '/registration', body)
  }
  //get users
  getUser() {
    return this.http.get(this.url)
  }

  deleteUser(userid: number) {
    return this.http.delete(this.url + '/' + userid)
  }


}