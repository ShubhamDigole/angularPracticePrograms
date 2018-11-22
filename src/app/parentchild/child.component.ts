import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<div style="background:pink;border:1px solid green;padding:20px;"><h1 style="color:blueviolet">{{title}}</h1> <p style="color:blueviolet">{{para}}</p></div>',
 // styleUrls: ['./test.component.css']
})
export class ChildComponent implements OnInit {

  title = "Child Container";
  para = "I am a Child component";
    
  constructor() {
    console.log("fdsfdsf");
   }

  ngOnInit() {
  }


}
