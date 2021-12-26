import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:3000/post"

  createPost(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,data)
  }
  
  getPost():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }
  
  
  getPostById(id:number):Observable<any>{
    return this.http.get<any>(this.baseUrl+'/'+id)
  }

  deletePost(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl+'/'+id)
  }
  
  UpdatePost(id:number,data:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+'/'+id,data)
  }

  newUrl= "http://localhost:3000/userpost/"
  getPostByUserId(id:number):Observable<any>{
    return this.http.get<any>(this.newUrl+id)
  }

}
