import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appdata',
  template: '<test></test>',
  //styleUrls: ['./test.component.css']
})
export class WelcomeComponent implements OnInit {

  title = "hiiiii angular";
  para = "this is paragraph";

  constructor() {
    console.log("");
   }

  ngOnInit() {
  }


}
