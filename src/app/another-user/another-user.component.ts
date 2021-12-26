import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-another-user',
  templateUrl: './another-user.component.html',
  styleUrls: ['./another-user.component.css']
})
export class AnotherUserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:UserService) { }
  id!:number
  user_info:any

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    this.service.getUserById(this.id).subscribe(data=>{
      this.user_info = data.data[0]
      console.log(this.user_info)
    })
  }

}
