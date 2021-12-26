import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  constructor(public route:Router){}
  
  user = localStorage.getItem("username")
  myImage = localStorage.getItem("img")

  ngOnInit(): void {

    setInterval(()=>{
      this.user = localStorage.getItem("username")
      this.myImage = localStorage.getItem("img")
    },1000)

  }

}
