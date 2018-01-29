import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {AppRoutingModuleModule} from './app-routing-module.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SixCategoryListComponent } from './navbar/six-category-list/six-category-list.component';
import { SixCardContainerComponent } from './six-card-container/six-card-container.component';
import { SixCardComponent } from './six-card-container/six-card/six-card.component';
import { SixRightSidebarComponent } from './six-right-sidebar/six-right-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SixCategoryListComponent,
    SixCardContainerComponent,
    SixCardComponent,
    SixRightSidebarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
