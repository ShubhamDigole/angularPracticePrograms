import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivess',
  templateUrl: './directivess.component.html',
  styleUrls: ['./directivess.component.css']
})
export class DirectivessComponent implements OnInit {
  status:boolean = false;
  constructor() {  
   
}

  ngOnInit() {
    
 

  }
  public test():void {
    if (this.status == false) {
      this.status = true;
    }
    else{

      this.status = false;

    }
  }
}
