import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component'
import { DirectivessComponent } from './directivess/directivess.component'
import { NgFormsComponent } from './ng-forms/ng-forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { from } from 'rxjs';

export const routes: Routes = [ 
{
  path: '',
  component: NotFoundComponent
},
{
    path: 'table',
    component: TableComponent
}, 
{
    path: 'directive',
    component: DirectivessComponent
}, 
{
   
    path: 'forms',
    component : NgFormsComponent
}


];
