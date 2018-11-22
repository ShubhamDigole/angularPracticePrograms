import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: '<div style="background:orange"><h1 style="color:#ADD8E6">{{title}} Shubham Java developer</h1> <p style="color:blue">{{para}}</p></div>',
 // styleUrls: ['./test.component.css']
})


export class FirstComponent {

  title = "hiiiii angular";
  para = "this is paragraph";



}
