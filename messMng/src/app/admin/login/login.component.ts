import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr'
import { UserService } from 'src/app/user/user.service';

@Component({
    selector: 'app-admin-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class adminlogin implements OnInit {
    name :""
    password :""

    constructor(private userService:UserService) { }

    ngOnInit() { }
    onLogin(){
        if(this.name.length == 0){
            toastr.error('enter valid name')
        }else if(this.password.length ==0)
        {
            toastr.error('enter valid password')
        }else {
            this.userService
            .login(this.name,this.password)
            .subscribe(response =>{
                if(response['status'] == 'success'){
                    toastr.success('authenticated')
                }else{
                    toastr.success(response['error'])
                }
            })
        }
    }
}