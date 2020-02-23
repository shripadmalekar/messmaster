import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Injectable()
export class OrderService {

  url = 'http://localhost:5000/order'

  constructor(private http: HttpClient) {
  }
  placeorder(messid:number,menuid:number,userid:number){
    const body ={
      messid :messid,
      menuid:menuid,
      userid:userid
    }
    return this.http.post(this.url,body)
  }

  getorder() {
    return this.http.get(this.url)
  }

  // add(foodname:string,foodprice:number,categoryid:number) {
  //   const body = {
  //     foodname: foodname,
  //     foodprice: foodprice,
  //     categoryid:categoryid

  //   }

  //   return this.http.post(this.url, body)
  // }

  messorder(messid: number) {
    
    return this.http.get(this.url + '/' + messid)
  }
  userorder(userid: number) {
    return this.http.get(this.url + '/byuserid/' + userid)
  }
  
 }