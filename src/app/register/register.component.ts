import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mydata: any;
  islog: any;

  constructor(private service:UserService,public route:Router) { }

  ngOnInit(): void {
  }

  register(reg:NgForm){
    console.log(reg.value)
  
    
      
      this.service.getAllUser().subscribe(data=>{this.mydata= data.data 
      console.log(this.mydata)
      this.islog = this.mydata.find((data: { name: any;email:any })=>data.name === reg.value.name || data.email ===  reg.value.email)
        
      // console.log(this.islog)

        if(this.islog){
          console.log("Username or email already taken")
        }
        else {
          this.service.createUser(reg.value).subscribe(data=>{
            console.log("data add successfully")
            localStorage.setItem("username",reg.value.name)  // local storage
            console.log(reg.value.name)
            localStorage.setItem("img","https://api.realworld.io/images/smiley-cyrus.jpeg")
            this.route.navigate(['/'])
          })

          
        }

      })
   
  }
}
