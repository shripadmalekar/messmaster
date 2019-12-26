import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  url = 'http://localhost:5000/category'

  constructor(private http: HttpClient) {
  }

  getCategory() {
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

  deleteFood(categoryid: number) {
    return this.http.delete(this.url + '/' + categoryid)
  }
  
 }