import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr'

@Component({
  selector: 'app-addcategory',
  templateUrl: './category.add.component.html',
  styleUrls: ['./category.add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categories= []
  categoryname=''

  constructor(
    private router: Router,
    private categoryService: CategoryService) {
      this.loadCategories()
  }

  loadCategories() {
    this.categoryService
      .getCategory()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.categories = response['data']
          
        }
      })
  }

  onSave() {
    this.categoryService.add(this.categoryname)
    .subscribe(response => {
      if (response['status'] == 'success') {
        this.categories = response['data']
        toastr.success(this.categoryname+'Add successfully')
      }
    })
  }

//   ngOnInit() {
//  }

  onDelete(categoryid: number) {
    this.categoryService
      .deleteFood(categoryid)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadCategories()
          toastr.success(this.categoryname+'deleted successfully')
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() {
      }

}