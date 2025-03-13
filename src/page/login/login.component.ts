import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  isUserLoggedIn: boolean = false;  
  InLoginView: boolean = true;
  LoggedUserMenu: any = []=[];
  Registerdobj: any = {
    "UserId": 0,
    "Name": "",
    "EmailId": "",
    "Password": "",
    "createdDate": new Date(),
    "fullName": "",
    "MobileNo": ""
  }
  loginobj: any = {
    userName: "",
    password: ""
  }

  constructor( private Router:Router) { }

  onLogin(){
    if( this.loginobj.userName == "admin" && this.loginobj.password== "admin@123"){
      alert("success password")
        this.Router.navigateByUrl('/Apointment-list');
      }else{
        alert("wrong password")
      }
    
    
    }
  ngOnInit(): void {

  }
}

