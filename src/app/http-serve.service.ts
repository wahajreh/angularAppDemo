import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpServeService {

  constructor(private http:HttpClient) { }
  callmain(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(user=>{
      return user
    }))
  }
}
