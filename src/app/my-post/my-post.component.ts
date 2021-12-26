import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css']
})
export class MyPostComponent implements OnInit {
  arr: any;
  value: any;

  constructor(private postservice :PostService,private userservice:UserService) { }
  MyData:any
  me:any
  ngOnInit(): void {
  

  // this.userservice.getAllUser().pipe(filter(data=>{
   
  //   return data.data === localStorage.getItem("username") 
  // })).subscribe(data=>{
  //   console.log(data)
  // })
  
  this.show()

  }

  delete(id:number){
    this.postservice.deletePost(id).subscribe(data=>{console.log(data)})
    this.show()
  }

  show(){
    this.userservice.getAllUser().subscribe(data=>{this.value= data.data 
      console.log(this.value)
      this.arr=this.value.find((data: { name: any})=>data.name === localStorage.getItem("username") )
      console.log(this.arr)

      this.postservice.getPostByUserId(this.arr.id).subscribe(data=>{
        this.MyData = data.data
        console.log(this.MyData)
      })
    })
  }

}
