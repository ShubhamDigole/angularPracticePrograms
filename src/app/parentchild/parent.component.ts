import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  //styleUrls: ['./test.component.css']
})
export class ParentComponent implements OnInit {

  title = "Parent Component";
  para = "this is msg from parent component";

  constructor() {
    console.log("fdsfdsf");
   }

  ngOnInit() {
  }


}
