import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FristpageComponent } from './fristpage/fristpage.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { StdashboardsComponent } from './students/stdashboards/stdashboards.component';
import { ShopdashboardComponent } from './shop/shopdashboard/shopdashboard.component';
import { NewsComponent } from './students/news/news.component';
import { HomeComponent } from './shop/home/home.component';
import { PiechartComponent } from './shop/piechart/piechart.component';
 

@NgModule({
  declarations: [
    AppComponent,
    FristpageComponent,
    LoginComponent,
    RegisterComponent,
    StdashboardsComponent,
    ShopdashboardComponent,
    NewsComponent,
    HomeComponent,
    PiechartComponent,
 
     
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
   HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
