import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private service : UserService,private route:Router) { }

  ngOnInit(): void {
  }

  mydata : any
  // login(l:NgForm){
  //   console.log(l.value.email)
  //   this.service.getAllUser().pipe(filter(val => {
    
  //     return val.data.email === l.value.email;
  //   })).subscribe(val=>{
  //     this.mydata = val
  //     console.log(this.mydata)
  //   })
  // }



  islog :any
  login(l:NgForm){
    this.service.getAllUser().subscribe(data=>{this.mydata= data.data 
    console.log(this.mydata)
    this.islog = this.mydata.find((data: { email: any;password:any })=>data.email === l.value.email && data.password ===  l.value.password)
    
    if(this.islog){
      console.log("login successfull")
      localStorage.setItem("username",this.islog.name)  // local storage
      localStorage.setItem("img",this.islog.img)
      console.log(this.islog.name)
      this.route.navigate(['/'])

      
      
    }
    else {
      console.log("Invalid user")
    }
  
  })

  }
}
