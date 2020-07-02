import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './comps/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { AllModulesModule } from './all-modules/all-modules.module'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
