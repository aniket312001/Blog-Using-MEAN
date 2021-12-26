import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private postService:PostService,private userService:UserService) { }

  post :any
  otherUser:any
  ngOnInit(): void {

    this.postService.getPost().subscribe(data=>{
      this.post = data.data
      
    })

    // this.userService.getUserById(this.post.user_id).subscribe(res=>{
    //   this.otherUser = res.data
    //   console.log(this.otherUser)
    // })
    
  }



}
