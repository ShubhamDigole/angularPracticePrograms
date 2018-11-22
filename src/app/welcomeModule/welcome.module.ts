import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WelcomeComponent } from './welcome.component';
import { FirstComponent } from './first.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  exports:[
   WelcomeComponent,
   FirstComponent
  ],
  providers: [],
  bootstrap: []
})
export class WelcomeModule { }


