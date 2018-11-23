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
     
    { code: 101, name : 'shubham', job : 'Angular Developer' },
    { code: 102, name : 'Anuja', job : 'Android Developer' },
    { code: 107, name : 'Shifa', job : 'Java Developer' },
    { code: 109, name : 'Alia', job : 'Software Tester' },
    { code: 105, name : 'Vasundhara', job : 'Calculator' }                
  
  
  
  
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
