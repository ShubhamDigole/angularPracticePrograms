import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivess',
  templateUrl: './directivess.component.html',
  styleUrls: ['./directivess.component.css']
})
export class DirectivessComponent implements OnInit {
  status:boolean = false;
  employee:any[];
   
  constructor() {  


   this.employee= [
     
    { code: 101, name : 'shubham', job : 'Angular Developer', city : 'Latur' },
    { code: 102, name : 'Anuja', job : 'Android Developer', city : 'Pune' },
    { code: 107, name : 'Shifa', job : 'Java Developer', city : 'Karad' },
    { code: 109, name : 'Alia', job : 'Software Tester', city : 'Kolhapur' },
                 
  
  
  
  
  ]
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
