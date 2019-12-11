import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import * as toastr from 'toastr';
@Component({
    selector: 'userregistration',
    templateUrl: './user.registration.component.html',
    styleUrls:['./user.registration.component.css']
})

export class UserRegistrationComponent implements OnInit {
    
    name=''
    email=''
    address=''
    messid:number
    password=''



    constructor(private router:Router,
        private userservice :  UserService) { }


    ngOnInit() { }
    onregistration(){
        // if(this.name.length == 0){
        //     toastr.error('enter valid username')            
        // }else if(this.email == null){
        //     toastr.error('enter valid email')            
        // }else if(this.address == null){
        //     toastr.error('enter valid address')            
        // }else if(this.password == null){
        //     toastr.error('enter valid college name')            
        // }else if(this.phno == 0){
        //     toastr.error('enter valid mobile no')            
        // }
        // else{
            this.userservice
            .registerUser(this.name,this.email,this.address,this.password,this.messid)
            .subscribe(response =>{
                console.log(response['status'])
                if(response['status'] == 'success'){
                    toastr.success('registered')
                    //this.router.navigate(['/user-login'])
                }else{
                    toastr.error(response['error'])

                }
            })
        }
    }
