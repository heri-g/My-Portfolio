import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'app/app-routing.module';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AngularDirectivesComponent } from './components/angular-directives/angular-directives.component';
import { CounterComponent } from './components/angular-directives/counter/counter.component';
import { Mock1Component } from './components/mock-1/mock-1.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavBarComponent,
    AngularDirectivesComponent,
    CounterComponent,
    Mock1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
