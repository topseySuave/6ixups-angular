//---------------------------- Angular library ----------------------------//
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
//--------------------------------------------------------//

//------------------------------ import components ----------------------------------//
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SixCategoryListComponent} from './navbar/six-category-list/six-category-list.component';
import {SixCardContainerComponent} from './six-card-container/six-card-container.component';
import {SixCardComponent} from './six-card-container/six-card/six-card.component';
import {SixRightSidebarComponent} from './six-right-sidebar/six-right-sidebar.component';
import { AuthenticationBarComponent } from './navbar/authentication-bar/authentication-bar.component';
import { SixMainContainerComponent } from './six-main-container/six-main-container.component';
import { SixPostMainComponent } from './six-post-main/six-post-main.component';
import { SixPostCardComponent } from './six-post-main/six-post-container/six-post-card/six-post-card.component';
import { SixPostContainerComponent } from './six-post-main/six-post-container/six-post-container.component';
import { SixCardListComponent } from './six-right-sidebar/six-card-list/six-card-list.component';
import { SixCommentSectionComponent } from './six-post-main/six-post-container/six-comment-section/six-comment-section.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//------------------------------------------------------------------------------------//

//--------------- Routing -----------------//
const appRoutes: Routes = [
    {path: '', component: SixMainContainerComponent},
    {path: '6ix/:id', component: SixPostMainComponent},
    {path: '**', component: PageNotFoundComponent}
];
//-----------------------------------------//

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SixCategoryListComponent,
        SixCardContainerComponent,
        SixCardComponent,
        SixRightSidebarComponent,
        AuthenticationBarComponent,
        SixMainContainerComponent,
        SixPostMainComponent,
        SixPostCardComponent,
        SixCardListComponent,
        SixPostContainerComponent,
        SixCommentSectionComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
