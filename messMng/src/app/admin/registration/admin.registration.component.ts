import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import * as toastr from 'toastr';
@Component({
    selector: 'admin-registration',
    templateUrl: './admin.registration.component.html',
    styleUrls:['./admin.registration.component.css']
})

export class AdminRegistrationComponent implements OnInit {
    
    messname =''
    email=''
    messaddress =''
    messowner =''
    messcontact =''
    messpassword =''
    longitude =''
    latitude =''
    role='owner'



    constructor(private router:Router,
        private adminservice :  AdminService) { }


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
            this.adminservice
            .registerUser(this.messname,this.email,this.messaddress,this.messowner,this.messcontact,this.messpassword,this.longitude,this.latitude,this.role)
            .subscribe(response =>{
                console.log(response['status'])
                if(response['status'] == 'success'){
                    toastr.success('registered')
                    //this.router.navigate(['/user-login'])
                }else{
                    console.log(response['error'])
                    toastr.error(response['error'])

                }
            })
        }

        
    }
