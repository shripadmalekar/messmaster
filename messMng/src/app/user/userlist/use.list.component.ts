import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Users-list',
  templateUrl: './user.list.component.html',
  styleUrls: ['./user.list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = []

  constructor(
    private router: Router,
    private userService: UserService) {
      this.loadUsers()
  }

  loadUsers() {
    this.userService
      .getUser()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.users = response['data']
        }
      })
  }


  onDelete(userid: number) {
    this.userService
      .deleteUser(userid)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadUsers()
        } else {
          console.log(response['error'])
        }
      })
  }

  ngOnInit() {
      }

}