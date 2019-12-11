import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr'
import { UserService } from '../user.service';

@Component({
    selector: 'app-admin-login',
    templateUrl: './user.login.component.html',
    styleUrls:['./user.login.component.css']
})

export class UserLoginComponent implements OnInit {
    nusername :""
    userpassword :""

    constructor(private userService:UserService) { }

    ngOnInit() { }
    onLogin(){
            this.userService
            .login(this.nusername,this.userpassword)
            .subscribe(response =>{
                if(response['status'] == 'success'){
                    toastr.success('authenticated')
                }else{
                    toastr.error(response['error'])
                }
            })
        }
}