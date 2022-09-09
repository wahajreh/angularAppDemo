import { Component } from '@angular/core';
import {HttpServeService} from './http-serve.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewApp';
  theInput:any;
  abc:any;
  constructor(private _service:HttpServeService){}
  BClick(){
    this.theInput=this.abc;
     this._service.callmain().subscribe(n=>{
      console.log(n)
     })
    
  }
}
