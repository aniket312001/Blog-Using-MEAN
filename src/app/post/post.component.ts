import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  formValue !: FormGroup
  value: any;
  arr: any;
  constructor(private fb:FormBuilder,private userService:UserService,private postService:PostService,public route:ActivatedRoute,public r:Router) { }

  ngOnInit(): void {
      this.userService.getAllUser().subscribe(data=>{this.value= data.data 
      console.log(this.value)
      this.arr=this.value.find((data: { name: any})=>data.name === localStorage.getItem("username") )
      
      this.formValue = this.fb.group({
        title:new FormControl("",[Validators.required]),      
        pname:new FormControl("",[Validators.required]),
        user_id:new FormControl(this.arr.id)
      })
    
    }) 


    if(this.route.snapshot.params['id']){
      this.postService.getPostById(this.route.snapshot.params['id']).subscribe(data=>{
        this.formValue.patchValue(data.data[0])
      })
    }
    
  
  }

  onSubmit(){
    if(this.route.snapshot.params['id']){
      this.postService.UpdatePost(this.route.snapshot.params['id'],this.formValue.value).subscribe(res=>
        console.log(res))
        this.r.navigate(['/mypost'])
    }
    else{

      this.postService.createPost(this.formValue.value).subscribe(data=>{console.log(data)})
      console.log("ewurhweoi")
      this.formValue.reset()
      this.r.navigate(['/mypost'])
    }
  }

}
