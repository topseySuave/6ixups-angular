import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

const routes:Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: '/', component: AppComponent}
];

@NgModule({
  imports: [
    CommonModule,
    Routes
  ],
  declarations: []
})
export class AppRoutingModuleModule { }
