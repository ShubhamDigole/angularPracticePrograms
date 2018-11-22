import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  template: '<div style="background:orange"><h1 style="color:#ADD8E6">{{title}}</h1> <p style="color:blue">{{para}}</p></div>',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  title = "hiiiii angular";
  para = "this is paragraph";

  constructor() {
    console.log("fdsfdsf");
   }

  ngOnInit() {
  }


}
