import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  formValue !: FormGroup
  arr: any;

  constructor(private fb:FormBuilder,private service : UserService,private route:Router) { }

  value:any
  ngOnInit(): void {
   
    
    this.service.getAllUser().subscribe(data=>{this.value= data.data 
      console.log(this.value)
      this.arr=this.value.find((data: { name: any})=>data.name === localStorage.getItem("username") )
      
      // this.myform(this.arr)

      // this.formValue = this.fb.group(this.arr)  // 
      this.formValue = this.fb.group(
        {
          name: new FormControl(this.arr.name,[Validators.required]),
          img: new FormControl(this.arr.img,[Validators.required]),
          password: new FormControl(this.arr.password,[Validators.required]),
          email: new FormControl(this.arr.email,[Validators.required,Validators.email]),
          bio: new FormControl(this.arr.bio,[Validators.required])
        }
        )
      
      
    })



  }


  update(){
    
    this.service.updateUser(this.arr.id,this.formValue.value).subscribe(data=>{console.log(data) 
      localStorage.setItem("username",this.formValue.value.name)
      localStorage.setItem("img",this.formValue.value.img)
      this.route.navigate(['/'])

        })

  } 


  logout(){    
    localStorage.clear()
    this.route.navigate(["/login"])
  }

}
