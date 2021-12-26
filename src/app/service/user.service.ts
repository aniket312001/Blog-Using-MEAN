import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  baseUrl = "http://localhost:3000/user"
  
  getAllUser():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

  createUser(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,data)
  }
  
  getUserById(id:number):Observable<any>{
    return this.http.get<any>(this.baseUrl+'/'+id)
  }
  
  mydata:any
  arr:any
  getUserByUserName(tname:string):any{
    this.getAllUser().subscribe(data=>{this.mydata= data.data 
      console.log(this.mydata)
      this.arr=this.mydata.find((data: { name: any})=>data.name === tname )
       console.log(this.arr) 
  })
  }


  updateUser(id:any,data:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+'/'+id,data)
  }


}
