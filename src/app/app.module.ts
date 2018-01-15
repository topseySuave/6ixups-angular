import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModuleModule} from './app-routing-module.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { PostCardComponent } from './post-card/post-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
