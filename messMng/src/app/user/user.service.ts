import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  url = 'http://localhost:5000/personinfo'

  constructor(private http: HttpClient) { }
//login
  login(nusername: string, userpassword: string) {
    console.log('nusername'+name)
    console.log('userpassword'+userpassword)
            const body = {
              nusername: nusername,
              userpassword: userpassword
    }

          return this.http.post(this.url + '/login', body)
  }

  
  //register
  registerUser(name: string, email: string,address :string, password: string ,messid:number) {
    console.log('name'+name)
    console.log('email'+email)
    console.log('pass'+password)
    console.log('add'+address)
    console.log('mesid'+messid)
    const body = {
                     nusername: name,
                     email: email,
                     userpassword: password,
                     address:address,
                     messid:messid
                  }

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