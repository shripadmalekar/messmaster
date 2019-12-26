import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {

  url = 'http://localhost:5000/menu'

  constructor(private http: HttpClient) {
  }

  getmenu() {
    return this.http.get(this.url)
  }

  
  
  add(messid:number,menudate:Date,foodname:string,menuprice:number) {
    const body = {
      foodname: foodname,
      messid:messid,
      menuprice:menuprice,
      menudate:menudate

    }
    // console.log(body)

    return this.http.post(this.url+ '/' + messid, body)
  }

  deleteFood(fid: number) {
    return this.http.delete(this.url + '/' + fid)
  }
  
 }