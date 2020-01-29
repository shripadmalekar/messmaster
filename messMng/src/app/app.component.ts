import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'messMng';
  username = ''

  constructor(private router : Router){
    // this.username = sessionStorage["nusername"]
  }
  isDefault(){
    if(sessionStorage['login_status']==1){
      return false
    }else{

      this.username = sessionStorage['nusername']
      return true
    }
  }
  isadmin(){
    
      if(sessionStorage['login_status']==1 && sessionStorage['role']=='admin'){
        this.username = sessionStorage['nusername']
        return true
      }else{
        return false
      }
    
  }
  isuser(){
    if(sessionStorage['login_status']==1 && sessionStorage['role']=='user'){
      this.username = sessionStorage['nusername']
      return true
    }else{
      return false
    }
  }
  isowner(){
    if(sessionStorage['login_status']==1 && sessionStorage['role']=='owner'){
      this.username = sessionStorage['nusername']
      return true
    }else{
      return false
    }
  }


  onLogout() {
    // remove the login status
    // sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('userid')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('nusername')
    this.router.navigate(['/'])
  }

  onOwnerLogout(){
    // remove the login status
    // sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('userid')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('nusername')
    this.router.navigate(['/'])
  }
}
