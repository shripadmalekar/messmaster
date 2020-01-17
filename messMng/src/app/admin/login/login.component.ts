import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr'
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class adminlogin implements OnInit {
    name :""
    password :""

    constructor(private userService:UserService,
        private router:Router) { }

    ngOnInit() { }
    onLogin(){
        if(this.name.length == 0){
            toastr.error('enter  name')
        }else if(this.password.length ==0)
        {
            toastr.error('enter password')
        }else {
            this.userService
            .login(this.name,this.password)
            .subscribe(response =>{
                if(response['status'] == 'success'){
                    toastr.success('authenticated member')
                    this.router.navigate(['/todaymenu-list'])
                }else{
                    toastr.error(response['error'])
                }
            })
        }
    }
}