import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {Home2Component} from './home2/home2.component';
import {ColoresDirective} from './colres.directive';
import {AppRoutingModule} from './app-routing.module';
import {ContactComponent} from './contact/contact.component';
import {Page404Component} from './page404/page404.component';
import {TvModule} from './tv/tv.module';
import {BookmarksModule} from './bookmarks/bookmarks.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    ColoresDirective,
    ContactComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    TvModule,
    BookmarksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
