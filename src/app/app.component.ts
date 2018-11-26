import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  power = 10;
  powers = '10-06-1996';
  today: number = Date.now();
  constructor(){

    console.log(this.title);
  }
  ngOnInit() {
    
  }
  
}
