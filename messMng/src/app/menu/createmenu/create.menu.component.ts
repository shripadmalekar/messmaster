import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CategoryService } from '../../category/category.service';
import { FoodService } from '../../food/food.service';
import { MenuService } from '../menu.service';
import * as toastr from 'toastr';
@Component({
    selector: 'create-menu',
    templateUrl: './create.menu.component.html',
    styleUrls:['./create.menu.component.css']
})

export class CreateMenuComponent implements OnInit {
    
    catagories=[]
    fooditeams =[]
    checkedfoods=[]
    foodname=''
    messid=1
    menudate:Date
    menuprice=0
    total=0


    catagoryid :number
    foodid :number



    constructor(private router:Router,
        private categoryservice :  CategoryService,
        private foodservice :  FoodService,
        private menuservice:MenuService) {
            this.categoryservice
            .getCategory().subscribe( response => {
                

                if(response['status']=='success'){
                    this.catagories = response['data']
                    this.catagoryid= this.catagories[0].id
                }else{
                    console.log(response['error'])
                }

            })


            
         }

         changeCheckbox(event: any,price:any){
            // console.log(this.catagories)
            // console.log(event.target.value)
           
            if(event.target.checked){
                //console.log(this.checkedfoods+"in check box")
                this.checkedfoods.push(event.target.value)
                this.menuprice=this.menuprice + price
                // console.log(this.total)
            }else{
                
                this.checkedfoods.forEach( (item, checkedfood) => {
                    if(item === event.target.value) this.checkedfoods.splice(checkedfood,1);
                    
                });
                console.log(this.foodname)
                this.menuprice=this.menuprice - price
                // console.log(this.total)
            }
             console.log("total"+this.menuprice)
            console.log(price)      
         }

         changeCatagory(e)
         {
            
            //foodservice :  FoodService
            this.foodservice
            .getMenuByCategory(e.target.value).subscribe( response => {
                this.foodname=''
   
                if(response['status']=='success'){
                    this.fooditeams = response['data']
                    this.foodid= this.fooditeams[0].id
                    
                }else{
                    console.log(response['error'])
                }

            })
         }


         oncreate()
         {
             this.foodname=''
             
            //  console.log(this.foodname+"above for")
            this.checkedfoods.forEach( (item, checkedfood) => {
                
                this.foodname=this.foodname+item+","
            });
            console.log(this.foodname.length+"after for")
            if(this.foodname.length==0){
                toastr.error('please select some items')
                //console.log(this.foodname+"plese select somthing")
                
                }
                else{
                
            this.foodname = this.foodname.slice(0, -1); 
            // console.log(this.foodname+"in else")

           this.menuservice
           .add(this.messid,this.menudate,this.foodname,this.menuprice)
           .subscribe(response =>{
            //    console.log(response['status'])
               if(response['status'] == 'success'){
                   toastr.success('registered')
                   //this.router.navigate(['/user-login'])
               }else{
                   console.log(response['data'])
                   toastr.error(response['error'])

               }
           })
           
            this.checkedfoods.forEach( (item, checkedfood) => {this.checkedfoods.splice(checkedfood,this.checkedfoods.length);
                
            });
        }
        }
       
    ngOnInit() { }
    }
