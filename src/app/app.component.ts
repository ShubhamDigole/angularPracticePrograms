import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  power = 10;
  constructor(){

    console.log(this.title);
  }
  ngOnInit() {
    
  }
  
}
