import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
//import {ActivatedRoute} from "@angular/router";
//import {AppRoutingModule} from "@angular/router";




@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    UsersComponent,
    PostsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
