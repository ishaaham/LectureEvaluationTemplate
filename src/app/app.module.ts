import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainModule } from './main/main.module';





@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
	
	

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
