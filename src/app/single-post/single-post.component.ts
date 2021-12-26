import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private service :PostService,private route: ActivatedRoute) { }
  d:any
  id:any
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.service.getPostById(this.id).subscribe(data=>{
      this.d = data.data[0]
      console.log(this.d)
    })


  }



}
