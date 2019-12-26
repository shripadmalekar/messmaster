import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category.list.component.html',
  styleUrls: ['./category.list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories= []

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

//   onAddCategory() {
//     this.router.navigate(['/category-add'])
//   }

//   ngOnInit() {
 // }

  onDelete(categoryid: number) {
    this.categoryService
      .deleteFood(categoryid)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadCategories()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() {
      }

}