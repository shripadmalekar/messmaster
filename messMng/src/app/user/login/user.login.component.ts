import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr'
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'user-login',
    templateUrl: './user.login.component.html',
    styleUrls:['./user.login.component.css']
})

export class UserLoginComponent implements OnInit {
    email :""
    userpassword :""

    constructor(private userService:UserService,
        private router:Router) { }

    ngOnInit() { }
    onLogin(){
            this.userService
            .login(this.email,this.userpassword)
            .subscribe(response =>{
                if(response['status'] == 'success'){
                    toastr.success('authenticated')
                    sessionStorage["login_status"] = 1

                    sessionStorage["userid"] = response['data']['userid']
                    sessionStorage["nusername"] = response['data']['nusername']
                   // sessionStorage["messid"] = response['data']['messid']
                    sessionStorage["role"] = response['data']['role']
                    this.router.navigate(['/todaymenu-list'])
                }else{
                    toastr.error(response['error'])
                }
            })
        }
}