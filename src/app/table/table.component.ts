
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = [];
  edits:boolean = false;
  editId:any;
  list = 0;
  list2= 100;
  constructor() { }
  
  ngOnInit() {
    
  }


  // add function called
  add(name: any, price: any, disc: any): void {


    // condition for discount less than 100

    if (name == '' && price == '') {
      alert('Plz Enter Proper Details');
      if (disc >= 100) {

        alert('enter proper discount');
      }

    }
    else {
      
      // vals object created
      let vals = {
        name, price, disc
      }

      // push data to arrray  
      this.data.push(vals);
      name = null;
    }

    console.log(this.data);
  }


  // delete function called  
  del(i: any) {

    var a = this.data.splice(i, 1);
    console.log(a);

  }


  show(i){
    this.editId = i;
    this.edits = true;
    

  }

  editVal(Ename,Eprice,Edisc){

   
   
    this.data[this.editId].name = Ename;
    this.data[this.editId].price = Eprice;
    this.data[this.editId].disc = Edisc;
   
    console.log(this.editId);
    this.edits = false;


  }

  search(min:number,max:number){

    this.list = min;
    this.list2 = max;
  }


}