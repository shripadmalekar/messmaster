import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FoodService {

  url = 'http://localhost:5000/food'

  constructor(private http: HttpClient) {
  }

  getfood() {
    return this.http.get(this.url)
  }

  add(foodname:string,foodprice:number,categoryid:number) {
    const body = {
      foodname: foodname,
      foodprice: foodprice,
      categoryid:categoryid

    }

    return this.http.post(this.url, body)
  }

  deleteFood(fid: number) {
    return this.http.delete(this.url + '/' + fid)
  }
  
 }