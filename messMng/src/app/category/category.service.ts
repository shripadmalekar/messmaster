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

  add(categoryname:string) {
    const body = {
      categoryname: categoryname
    }

    return this.http.post(this.url, body)
  }

  deleteFood(categoryid: number) {
    console.log(categoryid)
    return this.http.delete(this.url + '/' + categoryid)
    
  }
  
 }