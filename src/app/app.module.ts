import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { WelcomeModule } from './welcomeModule/welcome.module';

import { ParentComponent } from './parentchild/parent.component';
import { ChildComponent } from './parentchild/child.component';
import { DirectivessComponent } from './directivess/directivess.component';
import { DirDirective } from './dir.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NewcompComponent,
    ParentComponent,
    ChildComponent,
    DirectivessComponent,
    DirDirective,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
