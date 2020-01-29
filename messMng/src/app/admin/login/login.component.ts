import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr'
import { AdminService } from 'src/app/admin/admin.service';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class adminlogin implements OnInit {
    email :""
    messpassword :""

    constructor(private adminService:AdminService,
        private router:Router) { }

    ngOnInit() { }
    onLogin(){
        this.adminService
        .login(this.email,this.messpassword)
        .subscribe(response =>{
            if(response['status'] == 'success'){
                toastr.success('authenticated')
                sessionStorage["login_status"] = 1

                sessionStorage["messid"] = response['data']['messid']
                sessionStorage["messname"] = response['data']['messname']
                sessionStorage["role"] = response['data']['role']
                 this.router.navigate(['/todaymenu-list'])
            }else{
                toastr.error(response['error'])
            }
        })
    }
}