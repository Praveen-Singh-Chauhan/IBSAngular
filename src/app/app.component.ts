import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IBS';
getName(name:any,param2:any){
alert("Hello "+name);
alert("You are tagged to "+param2);
}
  
}
