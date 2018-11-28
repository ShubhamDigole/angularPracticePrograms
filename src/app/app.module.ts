import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { WelcomeModule } from './welcomeModule/welcome.module';

import { ParentComponent } from './parentchild/parent.component';
import { ChildComponent } from './parentchild/child.component';
import { DirectivessComponent } from './directivess/directivess.component';
import { DirDirective } from './dir.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { TableComponent } from './table/table.component';
import { DiscoutPipe } from './discout.pipe';
import { RouterModule, Router } from '@angular/router';
import { NgFormsComponent } from './ng-forms/ng-forms.component';
import { routes} from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NewcompComponent,
    ParentComponent,
    ChildComponent,
    DirectivessComponent,
    DirDirective,
    ExponentialStrengthPipe,
    TableComponent,
    DiscoutPipe,
  
    NgFormsComponent,
  
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WelcomeModule,
    ReactiveFormsModule,
 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
